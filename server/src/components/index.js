import formFieldOptionSchema from './form-field-option.json';
import formFieldSchema from './form-field.json';

const CATEGORY = 'form-builder';

const COMPONENTS = [
  ['form-field-option', formFieldOptionSchema],
  ['form-field', formFieldSchema],
];

function toGlobalId(uid) {
  const camel = `component_${uid}`.replace(/[^a-zA-Z0-9]+(.)/g, (_, char) =>
    char.toUpperCase()
  );
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function createComponent(category, modelName, schema) {
  const uid = `${category}.${modelName}`;
  const definition = JSON.parse(JSON.stringify(schema));

  return Object.assign(definition, {
    __schema__: JSON.parse(JSON.stringify(schema)),
    __filename__: `${modelName}.json`,
    uid,
    category,
    modelType: 'component',
    modelName,
    globalId: schema.globalId || toGlobalId(uid),
  });
}

export function registerComponents(strapi) {
  const registry = strapi.get('components');

  for (const [modelName, schema] of COMPONENTS) {
    const component = createComponent(CATEGORY, modelName, schema);

    if (!registry.get(component.uid)) {
      registry.set(component.uid, component);
    }
  }
}
