import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), "public", "data", "dummy.json");
    const fileData = await fs.readFile(filePath, "utf-8");
    const events = JSON.parse(fileData);

    // Assign a new id
    const newId = events.length > 0 ? events[events.length - 1].id + 1 : 1;
    const newEvent = { id: newId, ...data };

    events.push(newEvent);
    await fs.writeFile(filePath, JSON.stringify(events, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true, event: newEvent }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ success: false, error: "Event ID required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const filePath = path.join(process.cwd(), "public", "data", "dummy.json");
    const fileData = await fs.readFile(filePath, "utf-8");
    let events = JSON.parse(fileData);

    const initialLength = events.length;
    events = events.filter((event) => event.id !== id);

    if (events.length === initialLength) {
      return new Response(JSON.stringify({ success: false, error: "Event not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    await fs.writeFile(filePath, JSON.stringify(events, null, 2), "utf-8");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}