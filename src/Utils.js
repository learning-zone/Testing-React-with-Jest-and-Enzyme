export const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
};
