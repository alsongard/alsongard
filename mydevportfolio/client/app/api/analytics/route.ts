import {BetaAnalyticsDataClient} from "@google-analytics/data";

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
    response.rows.forEach(row => {
        console.log(`${row.dimensionValues[0].value}: ${row.metricValues[0].value} views`);
    });
    // Totals (sum of all rows)
    console.log('Total views:', response.totals[0].metricValues[0].value);
}


async function getEvents() {
    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }]
    });

    console.log('Events report:');
    response.rows.forEach(row => {
        console.log(`${row.dimensionValues[0].value}: ${row.metricValues[0].value} occurrences`);
    });
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

    response.rows.forEach(row => {
        const url = row.dimensionValues[1]?.value || 'N/A';
        const count = row.metricValues[0].value;
        console.log(`Project URL: ${url}, Views: ${count}`);
    });
}

async function GET() {

}