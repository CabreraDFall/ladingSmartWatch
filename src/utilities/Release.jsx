function Release({ data }) {
  const reverse = data.orientation === "reverse" ? "flex-row-reverse" : "";

  return (
    <div className={`flex items-center mx-10 ${reverse}`}>
      <div className="flex-1 flex justify-center items-center">
        <img
          alt={data.title || "Image"}
          srcSet={data.image}
          className=" h-auto object-contain"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="mr-10">
          <h3 className="text-5xl font-semibold mb-2 py-5">
            {data.title || "Default Title"}
          </h3>
          <p className="text-sm text-gray-600 mr-16">
            {data.content || "Default content goes here."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Release;
