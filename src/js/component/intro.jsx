import React from "react";

//create your first component
const Intro = () => {
  return (
    <div className="text-left">
      <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5">A Warm Welcome!</h1>
          <p class="col-md-8 fs-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
            similique quaerat am nobis illo aspernatur vitae fugiat numquam
            repellat.
          </p>
          <button class="btn btn-primary btn-lg" type="button">
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
