// Polyfill for useEffect
// useEffect runs side effects in a component, similar to componentDidMount and componentDidUpdate.
/*
How It Works:

Stores dependencies in effectsStore.

Compares dependencies (deps) to determine whether to run the effect.
*/

let effectsStore = [];
let effectIndex = 0;

function useEffect(callback, deps) {
  const prevDeps = effectsStore[effectIndex];

  let hasChanged = true;
  if (prevDeps) {
    hasChanged = deps.some((dep, i) => dep !== prevDeps[i]);
  }

  if (hasChanged) {
    callback();
    effectsStore[effectIndex] = deps;
  }

  effectIndex++;
}

// Example Usage
function Component() {
  useEffect(() => {
    console.log('Effect ran');
  }, []);

  console.log('Component rendered');
}

Component();
Component(); // Second render - effect runs only once
