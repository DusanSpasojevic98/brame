import jwt_decode from "jwt-decode";

const isJwtValid = (token) => {
    if (!token) return false;

    const decodedToken = jwt_decode(token);
    const dateNow = new Date();
    const precisionFix = 1000;

    return decodedToken.exp > dateNow.getTime() / precisionFix;
}

export { isJwtValid };