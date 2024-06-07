export enum StorageKeys {
  ACCESS_TOKEN = "@access_token",
  CODE_VERIFIER = "@codeVerifier",
  AFTER_AUTH_REDIRECT_TO_URI = "@afterAuthRedirectToUri",
}

const storage = localStorage;

export const getItemFromStorage = async (key: StorageKeys) => {
  try {
    return await storage.getItem(key);
  } catch (e) {
    console.error("Ошибка при считывании из хранилища storage");
  }
};

export const setItemToStorage = async (key: StorageKeys, value: string) => {
  try {
    await storage.setItem(key, value);
  } catch (e) {
    console.error("Ошибка при добавлении в хранилище storage");
  }
};

export const deleteItemFromStorage = async (key: StorageKeys) => {
  try {
    await storage.removeItem(key);
  } catch (e) {
    console.error("Ошибка при удалении из хранилища storage");
  }
};
