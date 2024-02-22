import GalleryOne from '../UI/GalleryOne';

const Properties = () => {
  return (
    <section
      className="max-container padding-container 
    flex flex-col gap-20 py-10
    md:gap-28  
    xl:flex-row"
    >
      <div>
        <div className="flex items-center">
          <h1 className="bold-32 text-center lg:bold-32 xl:text-start mr-4 capitalize">
            properties
          </h1>
          <hr className="w-1/2 flex-shrink-0 border-t-2 border-gray-500" />
        </div>
        <div>
          <span className="regular-14 text-center xl:text-start capitalize">
            Welcome to our coliving space, where each day brings new
            connections, new adventures, and a community that inspires you to
            live fully
          </span>
        </div>
        <div className="mt-4">
          <GalleryOne />
        </div>
      </div>
    </section>
  );
};

export default Properties;
