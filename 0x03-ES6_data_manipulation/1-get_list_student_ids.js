export default function getListStudentIds(objects) {
  if (Array.isArray(objects)) {
    const test = objects.every((obj) => obj && typeof obj.id === 'number');
    if (!test) return [];
    return objects.map((object) => object.id);
  }
  return [];
}
