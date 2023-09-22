export const variables={
    API_URL:"https://webapi.groupkh.com:8004/api/",
    AND: '&',
    ANY: '%',
    GET: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify()
    },
    POST: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify()
    },
    ITEMS: {
        GET_PRIMARY: {
            URL: "Item_Get?",
            OPTION01: "ACT="
        },
        POST_CS_DETAIL: {
            URL: "Item_Only_CS_Post?",
            OPTION01: "ITCD="
        },
        POST_FULL_DETAIL: {
            URL: "Item_CS_POST?",
            OPTION01: "ACT=",
            OPTION02: "ITCD="
        }
    },
    CUSTOMERS: {
        POST_PRIMARY: {
            URL: "CSTM_w_sales_Post?",
            OPTION01: "CSTMID=",
            OPTION02: "MNBR=",
            OPTION03: "SLID=",
            OPTION04: "ACT="
        },
        POST_FULL_SLM: {
            URL: "CSTM_Post?",
            OPTION01: "CSTMID=",
            OPTION02: "SLID="
        },
        POST_BR_TZIROS_SLM: {
            URL: "CSTM_BRC_Post?",
            OPTION01: "CSTMID=",
            OPTION02: "SLID="
        },
        POST_AX: {
            URL: "CSTM_AX_Post?",
            OPTION01: "CSTMID=",
        },
        POST_KARTELA: {
            URL: "CSTM_Kartela_Post?",
            OPTION01: "CSTMID=",
        },
    }
}
