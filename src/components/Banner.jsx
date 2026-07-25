const Banner = () => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWy5kvmgLLONsXqMaqStagZln3rmB8XLcNaakalngXw&s=10)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="mb-5">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="btn btn-outline btn-warning">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
