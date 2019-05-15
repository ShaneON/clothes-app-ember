import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = payload.map(t => this._toNormalisedPayload(t));
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = this._toNormalisedPayload(payload);
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },

  _toNormalisedPayload(payload) {
    return {
      id: payload.id,
      name: payload.name,
      url: payload.url,
      caption: payload.caption
    };
  }
});
