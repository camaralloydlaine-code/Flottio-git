/**
 * @typedef {Object} Vehicle
 * @property {string} id
 * @property {string} license_plate
 * @property {string} make
 * @property {string} model
 * @property {string} status
 */

/**
 * @typedef {Object} Provider
 * @property {string} id
 * @property {string} name
 * @property {number} rating
 * @property {number} distance_m
 */

/**
 * @typedef {Object} OrderPhoto
 * @property {string} url
 * @property {'avant'|'apres'} type
 * @property {string} taken_at
 */

/**
 * @typedef {Object} OrderEvent
 * @property {string} event_type
 * @property {string} label
 * @property {string} description
 * @property {string} timestamp
 */

/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {string} reference          - ex: "FLT-2026-0042"
 * @property {string} fleet_id
 * @property {Vehicle} vehicle
 * @property {Provider|null} provider
 * @property {{ type: string, label: string, base_price: number }} service
 * @property {'brouillon'|'en_attente'|'confirme'|'en_cours'|'termine'|'annule'} status
 * @property {string} scheduled_date
 * @property {string} location_address
 * @property {OrderPhoto[]} photos
 * @property {OrderEvent[]} timeline
 * @property {number|null} final_price
 */

export {}
