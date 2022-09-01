import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {
  PayFormCredit,
  PayFormCustomer,
  PayFormDelivery,
  PayFormProduct,
  PayPrice,
} from "./index";

import "./PayForm.scss";

function PayForm() {
  return (
    <>
      {/* <payForm /> */}
      <form className="pay-form flex-bewteen">
        <section className="pay-form-section">
          <div className="pay-form-section-inner">
            {/* 주문고객정보 */}
            <PayFormCustomer />

            {/* 배송지정보 */}
            <PayFormDelivery />

            {/* 주문상품정보 */}
            <PayFormProduct />

            {/* 결제수단정보 */}
            <PayFormCredit />

            {/* 주의사항정보 */}
            <div className="container">
              <div className="customer-info">
                <div className="customer-info-inner">
                  <div className="down-detail">
                    <label className="flex-align-center">
                      <input
                        type="checkbox"
                        id="basicAddress"
                        className="checkbox"
                      />
                      위 상품의 판매조건을 명확히 확인하였으며, 구매 진행에 동의
                      합니다.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 결제 금액 정보 */}
        <PayPrice />
      </form>
    </>
  );
}

export default PayForm;