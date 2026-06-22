export const mockOrders = [
  {
    id: "ord_001",
    reference: "FLT-2026-0042",
    fleet_id: "fleet_01",
    vehicle: { id: "veh_1", make: "Peugeot", model: "3008", license_plate: "AB-123-CD" },
    provider: { id: "prov_1", name: "Esthétique Auto Pro", rating: 4.8, distance_m: 5400 },
    service: { type: "complet", label: "Nettoyage Complet Int/Ext", base_price: 145.00 },
    status: "termine",
    scheduled_date: "2026-06-20T14:00:00Z",
    location_address: "12 Rue de la Paix, 75002 Paris",
    photos: [
      { url: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", type: "avant", taken_at: "2026-06-20T14:05:00Z" },
      { url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", type: "apres", taken_at: "2026-06-20T16:30:00Z" }
    ],
    timeline: [
      { event_type: "created", label: "Commande créée", description: "Par Sajib Rahman", timestamp: "2026-06-18T09:15:00Z" },
      { event_type: "accepted", label: "Mission acceptée", description: "Par Esthétique Auto Pro", timestamp: "2026-06-18T10:30:00Z" },
      { event_type: "started", label: "Intervention démarrée", description: "Photos avant ajoutées", timestamp: "2026-06-20T14:05:00Z" },
      { event_type: "completed", label: "Intervention terminée", description: "Photos après ajoutées", timestamp: "2026-06-20T16:30:00Z" }
    ],
    final_price: 145.00
  },
  {
    id: "ord_002",
    reference: "FLT-2026-0043",
    fleet_id: "fleet_01",
    vehicle: { id: "veh_2", make: "Renault", model: "Clio", license_plate: "EF-456-GH" },
    provider: { id: "prov_2", name: "CleanCar Express", rating: 4.5, distance_m: 2100 },
    service: { type: "interieur", label: "Nettoyage Intérieur Profond", base_price: 89.00 },
    status: "en_cours",
    scheduled_date: "2026-06-22T09:00:00Z",
    location_address: "45 Avenue Victor Hugo, 75016 Paris",
    photos: [
      { url: "https://images.unsplash.com/photo-1550346549-0d866a908993?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", type: "avant", taken_at: "2026-06-22T09:10:00Z" }
    ],
    timeline: [
      { event_type: "created", label: "Commande créée", description: "Par Sajib Rahman", timestamp: "2026-06-21T11:20:00Z" },
      { event_type: "accepted", label: "Mission acceptée", description: "Par CleanCar Express", timestamp: "2026-06-21T14:00:00Z" },
      { event_type: "started", label: "Intervention démarrée", description: "Photos avant ajoutées", timestamp: "2026-06-22T09:10:00Z" }
    ],
    final_price: null
  },
  {
    id: "ord_003",
    reference: "FLT-2026-0044",
    fleet_id: "fleet_01",
    vehicle: { id: "veh_3", make: "Tesla", model: "Model 3", license_plate: "IJ-789-KL" },
    provider: null,
    service: { type: "premium", label: "Préparation Premium + Polish", base_price: 210.00 },
    status: "en_attente",
    scheduled_date: "2026-06-23T10:00:00Z",
    location_address: "8 Boulevard Haussmann, 75009 Paris",
    photos: [],
    timeline: [
      { event_type: "created", label: "Commande créée", description: "Par Sajib Rahman", timestamp: "2026-06-22T08:00:00Z" },
      { event_type: "matching", label: "Recherche de prestataire", description: "Notification envoyée aux prestataires à proximité", timestamp: "2026-06-22T08:05:00Z" }
    ],
    final_price: null
  },
  {
    id: "ord_004",
    reference: "FLT-2026-0045",
    fleet_id: "fleet_01",
    vehicle: { id: "veh_4", make: "Audi", model: "A4", license_plate: "MN-012-OP" },
    provider: { id: "prov_3", name: "Luxe Wash", rating: 4.9, distance_m: 8000 },
    service: { type: "exterieur", label: "Lavage Extérieur", base_price: 120.00 },
    status: "annule",
    scheduled_date: "2026-06-19T15:00:00Z",
    location_address: "22 Rue de Rivoli, 75001 Paris",
    photos: [],
    timeline: [
      { event_type: "created", label: "Commande créée", description: "Par Sajib Rahman", timestamp: "2026-06-18T16:00:00Z" },
      { event_type: "cancelled", label: "Commande annulée", description: "Par le gestionnaire", timestamp: "2026-06-19T09:00:00Z" }
    ],
    final_price: null
  }
];
