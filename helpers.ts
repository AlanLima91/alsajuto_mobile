import { AsyncStorage } from 'react-native';

export const storeDataLocally = async (storage_key: string, valueToStore: string) => {
  try {
    await AsyncStorage.setItem('@' + storage_key, valueToStore)
  } catch (e) {
    alert('Couldn\'nt store value to local store');
    throw new Error(e);
  }
}

export const getDataLocally = async (storage_key: string) => {
  try {
    const value = await AsyncStorage.getItem('@' + storage_key)
    if (value !== null) {
      if (storage_key == 'userAccountToken') {
        console.log("token number : ", value);
      }
      // value previously stored
    }
  } catch (e) {
    // error reading value
    throw new Error(e);
  }
}

export function requestService(endpoint, method, body = {}, token = null) {
  let BaseUrl = 'https://alsatoju-dev.herokuapp.com/'
  if (token) {
    return new Promise((resolve, reject) => {
      fetch(BaseUrl + endpoint, {
        method: method,
        body: JSON.stringify(body),
        headers: {
          Authorization: "Bearer " + token,
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        return response.json()
      }).then((responseJson) => {
        resolve(responseJson)
      }).catch((error) => {
        reject(error)
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      fetch(BaseUrl + endpoint, {
        method: method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        return(response.json())
      }).then((responseJson) => {
        console.log("HIBOU MAGIQUE")
        resolve(responseJson)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
