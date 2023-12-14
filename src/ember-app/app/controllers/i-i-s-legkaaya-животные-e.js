import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-legkaaya-животные-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-legkaaya-сведения+клетка':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'тип',
            required: true,
            relationName: 'клетка',
            projection: 'КлеткаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-legkaaya-сведения+вид':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'вид',
            projection: 'ВидL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
