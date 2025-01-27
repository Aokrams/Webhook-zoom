export default async function handler(req, res) {
    const VERIFICATION_TOKEN = "eCDc8ZD2Rr2QLhqXMqHWZg";

    // Validar el token de Zoom
    if (req.headers.authorization !== VERIFICATION_TOKEN) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.method === "POST") {
        const event = req.body;

        // Procesar eventos de Zoom
        if (event.event === "meeting.sharing_started") {
            console.log(`El usuario ${event.payload.object.host_id} comenzó a compartir pantalla.`);
        } else if (event.event === "meeting.sharing_ended") {
            console.log(`El usuario ${event.payload.object.host_id} dejó de compartir pantalla.`);
        }

        return res.status(200).json({ message: "Evento recibido" });
    }

    res.status(405).json({ message: "Método no permitido" });
}
