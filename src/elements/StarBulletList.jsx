import React from "react";

const StarBulletList = ({ list }) => {
  return (
    <ul className="ps-3">
      {list.map((data, index) =>
        index % 2 ? (
          <li key={data} className="outlineBullet generalContent">
            {data}
          </li>
        ) : (
          <li key={data} className="solidBullet generalContent">
            {data}
          </li>
        )
      )}
    </ul>
  );
};

export default StarBulletList;
