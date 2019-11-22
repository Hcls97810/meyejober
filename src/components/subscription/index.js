import React, { useState } from "react";
import "./style.scss";
const Subscription = ({ plan }) => {
  return (
    <section class="pricing py-5">
      <div className="container">
        {plan === "month" ? (
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Basic
                  </h5>
                  <h6 class="card-price text-center">
                    $0<span class="period">/month</span>
                  </h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      Single User
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      5GB Storage
                    </li>
                    <li class="text-muted">
                      <span class="fa-li">
                        <i class="fas fa-times"></i>
                      </span>
                      Monthly Status
                    </li>
                  </ul>
                  <a href="#" class="btn btn-block text-uppercase">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Premium
                  </h5>
                  <h6 class="card-price text-center">
                    $9<span class="period">/month</span>
                  </h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      <strong>5 Users</strong>
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      50GB Storage
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      Unlimited Projects
                    </li>
                  </ul>
                  <a href="#" class="btn btn-block text-uppercase">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Enterprise
                  </h5>
                  <h6 class="card-price text-center">
                    $49<span class="period">/month</span>
                  </h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      <strong>Unlimited Users</strong>
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      150GB Storage
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      Unlimited Projects
                    </li>
                  </ul>
                  <a href="#" class="btn btn-block  text-uppercase">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Basic
                  </h5>
                  <h6 class="card-price text-center">
                    $10<span class="period">/year</span>
                  </h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      Single User
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      5GB Storage
                    </li>
                    <li class="text-muted">
                      <span class="fa-li">
                        <i class="fas fa-times"></i>
                      </span>
                      Monthly Status
                    </li>
                  </ul>
                  <a href="#" class="btn btn-block text-uppercase">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Premium
                  </h5>
                  <h6 class="card-price text-center">
                    $19<span class="period">/year</span>
                  </h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      <strong>5 Users</strong>
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      50GB Storage
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      Unlimited Projects
                    </li>
                  </ul>
                  <a href="#" class="btn btn-block text-uppercase">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    Enterprise
                  </h5>
                  <h6 class="card-price text-center">
                    $99<span class="period">/year</span>
                  </h6>
                  <hr></hr>
                  <ul class="fa-ul">
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      <strong>Unlimited Users</strong>
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      150GB Storage
                    </li>
                    <li>
                      <span class="fa-li">
                        <i class="fas fa-check"></i>
                      </span>
                      Unlimited Projects
                    </li>
                  </ul>
                  <a href="#" class="btn btn-block  text-uppercase">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Subscription;
