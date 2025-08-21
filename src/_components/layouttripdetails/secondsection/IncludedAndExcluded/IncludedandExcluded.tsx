import React from "react";
import Included from "./Included/Included";
import Excluded from "./Exluded/Excluded";

export default function IncludedandExcluded({ packedges }) {
  return (
    <>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 ">
        Included/Excluded
      </h3>
      <div className="grid sm:grid-cols-2 gap-6 ">
        <ul className="space-y-3">
          <Included packedges={packedges} />
        </ul>
        <Excluded packedges={packedges} />
      </div>
    </>
  );
}
