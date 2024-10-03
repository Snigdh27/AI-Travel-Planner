import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PHOTO_REF_URL } from "@/service/GlobalApi";
import { GetPlaceDetails } from "@/service/GlobalApi";

export const PlaceCardItem = ({ place }) => {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.place,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      console.log(PhotoUrl);
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.place}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-sm cursor-pointer">
        <img
          src={photoUrl ? photoUrl : "/placeholder.jpg"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />

        <div>
          <h2 className="font-bold text-lg">{place.place}</h2>

          <p className="text-sm text-gray-500">{place.details}</p>
          <h2 className="mt-2">🕒 {place.timeToTravel}</h2>
          <Button size="sm">
            <FaMapLocation />
          </Button>
        </div>
      </div>
    </Link>
  );
};
