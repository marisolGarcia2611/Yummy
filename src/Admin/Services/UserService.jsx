import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { UserClass } from "../Models/UserClass";
import { AlertClass } from "../../AlertClass";

const Alert = new AlertClass();
const User = new UserClass();
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

export class UserService {
  GetList() {
    return axiosInstance
    .get(`/users`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }

  GetObject(id) {
    return axiosInstance
      .get(`/users/${id}`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }

  CreateObject(object) {
    // console.log(`el objeto: ${object.username}`);
    return axiosInstance
    .post(`/users`, {
        name: object.name,
        last_name: object.last_name,
        email: object.email,
        username: object.username,
        password: object.password,
        phone: object.phone,
        role_id: object.role_id
    })
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }

  UpdateObject(object) {
    return axiosInstance
    .put(`/users`, {
        id: object.id,
        name: object.name,
        last_name: object.last_name,
        email: object.email,
        username: object.username,
        password: object.password,
        phone: object.phone,
        role_id: object.role_id
    })
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }

  DeleteObject(id) {
    return axiosInstance
    .delete(`/users/${id}`, {})
    .then((res) => res)
    .then((d) => d.data)
    .catch((response) => {
      let { message } = response.response.data.errors;
      throw new Error(message[0]);
    });
  }
}

