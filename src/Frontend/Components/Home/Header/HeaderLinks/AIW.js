import React from "react";

const AIW = () => {
  return (
    <main id="content" role="main">
      <div id="TargetAnyStore" class="container space-1">
        <h1 class="text-center mb-10">Target Any Store</h1>
        <div id="MajorStoreSupported">
          <div class="container border-bottom pb-5 mb-10">
            <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
              <span class="btn btn-xs btn-soft-success btn-pill mb-2">
                Target any Store
              </span>
              <h2>
                Grow your App in any <u>Store</u>.
              </h2>
              <small>No matter which store your apps are live in!</small>
            </div>
            <div class="row text-center">
              <div class="col-md-12 mb-7">
                <div class="d-flex justify-content-center">
                  <div class="ads-item text-center">
                    <div class="text-center px-lg-3">
                      <span class="btn btn-icon btn-lg btn-soft-success rounded-circle mb-5">
                        <span class="fab fa-google-play text-google-play btn-icon__inner fa-2x btn-icon__inner-bottom-minus"></span>
                      </span>
                      <h3 class="h5">Google Play Store</h3>
                    </div>
                  </div>
                  <div class="ads-item text-center">
                    <div class="text-center px-lg-3">
                      <span class="btn btn-icon btn-lg btn-soft-primary rounded-circle mb-5">
                        <span class="fab fa-app-store-ios btn-icon__inner fa-2x btn-icon__inner-bottom-minus"></span>
                      </span>
                      <h3 class="h5">Apple App Store</h3>
                    </div>
                  </div>
                  <div class="ads-item text-center">
                    <div class="text-center px-lg-3">
                      <span class="btn btn-icon btn-lg btn-soft-info rounded-circle mb-5">
                        <span class="fab fa-windows btn-icon__inner fa-2x btn-icon__inner-bottom-minus"></span>
                      </span>
                      <h3 class="h5">Microsoft Store</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AIW;
