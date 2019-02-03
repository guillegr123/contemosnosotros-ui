const results = [
  {
    candidate: {
      name: "Nayib Bukele",
      party: "GANA",
      photo: "Nayib35x35.png",
      color: "#00adef"
    },
    votes: 50000
  },
  {
    candidate: {
      name: "Carlos Callejas",
      party: "ARENA",
      photo: "Carlos35x35.png",
      color: "#005baa"
    },
    votes: 50000
  },
  {
    candidate: {
      name: "Hugo Martinez",
      party: "FMLN",
      photo: "Hugo35x35.png",
      color: "#c93638"
    },
    votes: 50000
  },
  {
    candidate: {
      name: "Josué Alvarado",
      party: "VAMOS",
      photo: "Josue35x35.png",
      color: "#1029B6"
    },
    votes: 50000
  }
];

const getResults = () => {
  return results;
};

const getDeparments = () => {
  return [
    { value: "ALL", key: "all", text: "Todos" },
    { value: "AHUACHAPAN", key: "Ahuachapán", text: "Ahuachapán" },
    { value: "CABANAS", key: "Cabañas", text: "Cabañas" },
    { value: "CHALATENANGO", key: "Chalatenango", text: "Chalatenango" },
    { value: "CUSCATLAN", key: "Cuscatlán", text: "Cuscatlán" },
    { value: "LA_LIBERTAD", key: "La Libertad", text: "La Libertad" },
    { value: "LA_PAZ", key: "La Paz", text: "La Paz" },
    { value: "LA_UNION", key: "La Unión", text: "La Unión" },
    { value: "MORAZAN", key: "Morazán", text: "Morazán" },
    { value: "SAN_MIGUEL", key: "San Miguel", text: "San Miguel" },
    { value: "SAN_SALVADOR", key: "San Salvador", text: "San Salvador" },
    { value: "SAN_VICENTE", key: "San Vicente", text: "San Vicente" },
    { value: "SANTA_ANA", key: "Santa Ana", text: "Santa Ana" },
    { value: "SONSONATE", key: "Sonsonate", text: "Sonsonate" },
    { value: "USULUTAN", key: "Usulután", text: "Usulután" }
  ];
};

export { getResults, getDeparments };
