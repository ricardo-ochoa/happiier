"use client";

const video = () => {
  return (
    <div className="row-span-1">
        <div>
          <div className="flex items-center justify-center md:hidden -z-10">
            <img src="https://freight.cargo.site/w/500/h/1000/q/75/i/D1576137206073396355931786183597/Showreal_M.gif" alt="Happier Studio" />
          </div>
          <div className="items-center justify-center hidden md:flex">
            <video width="80%" autoPlay loop muted>
              <source src="https://res.cloudinary.com/dnxxkvpiz/video/upload/v1711152198/happier/nx2fnd08wa1dqy418fbw.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    </div>
  );
}

export default video;