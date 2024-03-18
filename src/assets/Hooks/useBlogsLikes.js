import { useEffect, useState } from 'react';

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

function useBlogsLikes(existingArray, newArray) {
  const [mergedArray, setMergedArray] = useState([]);

  useEffect(() => {
    if (existingArray.length > 0) {
      const existingMap = {};
      existingArray.forEach((item) => {
        existingMap[item.id] = item.Views || 0;
      });

      const updatedArray = newArray.map((item) => ({
        ...item,
        Views: existingMap[item.id] || 0
      }));

      setMergedArray(updatedArray);
    } else {
      setMergedArray(newArray);
    }
  }, [existingArray, newArray]);

  return { mergedArray };
}

export default useBlogsLikes;
