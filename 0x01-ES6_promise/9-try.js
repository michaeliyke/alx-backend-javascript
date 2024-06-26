export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const ret = mathFunction();
    if (ret instanceof Error) {
      throw ret;
    }
    queue.push(ret);
    queue.push('Guardrail was processed');
  } catch (error) {
    delete error.stack;
    queue.push(error.toString());
    queue.push('Guardrail was processed');
  }
  return queue;
}
