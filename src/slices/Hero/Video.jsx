"use client";

const video = () => {
  return (
    <div className="row-span-1">
        <div>
          <div className="flex items-center justify-center md:hidden -z-10">
            <img src="https://images.prismic.io/ochagram/ZmFI_Zm069VX1f7a_test.gif?auto=format,compress" alt="Happiier Studio" />
          </div>
          <div className="items-center justify-center hidden md:flex">
            <video width="80%" autoPlay loop muted>
              <source src="https://ochagram.cdn.prismic.io/ochagram/ZmFEx5m069VX1f6t_main.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    </div>
  );
}

export default video;