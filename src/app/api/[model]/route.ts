import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { responseData } from '@/app/utils/data';

type TParams = {
    model: string;
};


export const GET = async (request: NextRequest, { params }: { params: TParams }) => {

    const model = params.model;
    console.log(model);

    try {

        const response = responseData.find((obj) => {
            return obj.model === model;
        });
        const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(5000);



        return NextResponse.json({
            success: true,
            status: "competed",
            data: response
        }, { status: 200 });

    } catch (err) {
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, { status: 500 });
    }
};