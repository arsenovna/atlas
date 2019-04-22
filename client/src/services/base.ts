import User from "../Interfaces/User";

export default class Base {
  // constructor(){}
  getCurrentSession = () => window.localStorage.getItem("token");

  getJson = async (url: RequestInfo) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.getCurrentSession()}`,
          "Content-type": "application/json"
        }
      });
      let res = await response.json();
      return res;
    } catch (error) {
      return error;
    }
  };

  putJson = async (url: RequestInfo, data: any) => {
    try {
      let response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Token token=${this.getCurrentSession()}`,
          Accept: "application/json, text/javascript",
          "Content-type": "application/json"
        },
        cache: "no-cache",
        credentials: "same-origin",
        body: data
      });
      let res = await response.json();
      return res;
    } catch (error) {
      return error;
    }
  };

  postJson = async (url: RequestInfo, data: any) => {
    try {
      let response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch (error) {
      return error;
    }
  };
}
