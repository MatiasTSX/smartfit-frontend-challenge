import api from "../api/Api";

export default async function findUnits(state: string) {
  try {
    const data = await api();
   
    const result = [];
    for (let i = 0; i < data.locations.length; i++) {
      const dataLocation = data.locations[i];

      if (dataLocation.schedules && dataLocation.schedules.length > 0) {
        if (state == "Manhã" && dataLocation.schedules[0].hour == "06h às 22h")
          result.push(dataLocation);
        if (state == "Tarde" && dataLocation.schedules[0].hour == "12h às 20h")
          result.push(dataLocation);
        if (state == "Noite" && dataLocation.schedules[0].hour == "18h às 23h")
          result.push(dataLocation);
      }


    }
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Erro em findUnits: ${error.message}`);
      console.error(error.stack);
    } else {
      console.error(`Erro desconhecido em findUnits: ${error}`);
    }
    throw error;
  }
}
