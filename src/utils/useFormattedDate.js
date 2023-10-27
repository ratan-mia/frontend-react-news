import React from 'react';

const useFormattedDate = (publishedDate) => {
  const formattedDate = React.useMemo(() => {
    return new Date(publishedDate).toLocaleDateString('en-US', {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }, [publishedDate]);

  return formattedDate;
};

