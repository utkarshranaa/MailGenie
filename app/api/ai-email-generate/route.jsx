import { GenerateEmailTemplateAIModel } from "@/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { prompt } = await req.json();

    try {
        const result = await GenerateEmailTemplateAIModel.sendMessage(prompt);
        const aiResp = result.response.text();
        console.log(aiResp);

        // Save this to Database;

        return NextResponse.json(JSON.parse(aiResp));

    } catch (e) {
        return NextResponse.json({ error: e });
    }


}