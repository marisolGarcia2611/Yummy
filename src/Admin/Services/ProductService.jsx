import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { AlertClass } from "../../AlertClass";
import { ProductClass } from "../Models/ProductClass";

const Alert = new AlertClass();
const Product = new ProductClass();
const cookies = new Cookies();
const API = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
  baseURL: API,
  timeout: 3500,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${cookies.get("Authorization")}`,
  },
});

export class ProductServiceClass {
  GetList() {
    return axiosInstance
    .get(`/products`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      console.log(response);
      let { message } = response.response.data;
      throw new Error(message[0]);
    });
  }

  GetObject(id) {
    return axiosInstance
    .get(`/products/${id}`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data;
      throw new Error(message[0]);
    });
  }

  CreateObject(data_object) {
    // console.log(`el objeto: ${data_object}`);
    return axiosInstance
    .post(`/products`, data_object)
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data;
      throw new Error(message[0]);
    });
  }

  UpdateObject(data_object) {
    return axiosInstance
    .put(`/products`, data_object)
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data;
      throw new Error(message[0]);
    });
  }

  DeleteObject(id) {
    // console.log(id)
    return axiosInstance
    .delete(`/products/${id}`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data;
      throw new Error(message[0]);
    });
  }
}