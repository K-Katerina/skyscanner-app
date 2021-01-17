const INVALID_PASSWORD = '12345678';

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        if (password !==  INVALID_PASSWORD) {
            resolve();
        } else {
            reject();
        }
    })
};

export const logout = () => Promise.resolve();
