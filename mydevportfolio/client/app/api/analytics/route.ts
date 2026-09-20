import {BetaAnalyticsDataClient} from "@google-analytics/data";
import { NextResponse } from "next/server";

const analyticsDataClient = new BetaAnalyticsDataClient();
const propertyId = process.env.PROPERTY_ID;
async function getPageViews() {
    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'pageTitle' }],
        metrics: [{ name: 'screenPageViews' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }]
    });

    console.log('Page views report:');
    console.log(response);
    if (!response) {
        return { success: false, msg: 'Failed getting views' };
    }

    // rows is optional — default to empty array
    const rows = response.rows ?? [];

    if (rows.length === 0) {
        return { success: true, data: [], total: 0 };
    }

    const pageViews = rows.map((row) => ({
        page: row.dimensionValues?.[0]?.value ?? 'Unknown',
        views: Number(row.metricValues?.[0]?.value ?? 0),
    }));

    // totals is also optional
    const total = Number(response.totals?.[0]?.metricValues?.[0]?.value ?? 0);

    return { success: true, data: pageViews, total };

}


async function getEvents() {
    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }]
    });

    if (!response) {
        return { success: false, msg: 'Failed getting views' };
    }

    // rows is optional — default to empty array
    const rows = response.rows ?? [];

    if (rows.length === 0) {
        return { success: true, data: [], total: 0 };
    }

    const pageViews = rows.map((row) => ({
        page: row.dimensionValues?.[0]?.value ?? 'Unknown',
        views: Number(row.metricValues?.[0]?.value ?? 0),
    }));

    // totals is also optional
    const total = Number(response.totals?.[0]?.metricValues?.[0]?.value ?? 0);

    return { success: true, data: pageViews, total };

    
    // console.log('Events report:');
    // response.rows.forEach(row => {
    //     console.log(`${row.dimensionValues[0].value}: ${row.metricValues[0].value} occurrences`);
    // });
}

async function getCustomEventWithParams() {
    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [
        { name: 'eventName' },
        { name: 'eventParams.value' }  // the parameter you set
        ],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
        filter: {
            fieldName: 'eventName',
            stringFilter: { value: 'viewed_project' }  // only this event
        }
        }
    });

    if (!response) {
        return { success: false, msg: 'Failed getting views' };
    }

    // rows is optional — default to empty array
    const rows = response.rows ?? [];

    if (rows.length === 0) {
        return { success: true, data: [], total: 0 };
    }

    const pageViews = rows.map((row) => ({
        page: row.dimensionValues?.[0]?.value ?? 'Unknown',
        views: Number(row.metricValues?.[0]?.value ?? 0),
    }));

    // totals is also optional
    const total = Number(response.totals?.[0]?.metricValues?.[0]?.value ?? 0);

    return { success: true, data: pageViews, total };

    // response.rows.forEach(row => {
    //     const url = row.dimensionValues[1]?.value || 'N/A';
    //     const count = row.metricValues[0].value;
    //     console.log(`Project URL: ${url}, Views: ${count}`);
    // });
}

async function GET() {

}