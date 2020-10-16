
const minutes = 10;
const refreshTime = 1000 * 60 * minutes;

export function shouldLoad(loadedAt, refreshAt = refreshTime) {
  const now = Date.now();
  const timeSinceLastLoad = now - loadedAt;
  const lastLoadedLongerThanRefreshTime = timeSinceLastLoad > refreshAt;
  return lastLoadedLongerThanRefreshTime;
}

export function arrayToObject(array) {
  return array.reduce((object, item) => ({
    ...object,
    [item.id]: item,
  }), {});
}

export function removeIdFromObject(id, object) {
  const { [id]: removedItem, ...objectWithoutId } = object;
  return objectWithoutId;
}

export function removeIdFromArray(id, array) {
  return array.filter(itemId => itemId !== id);
}
