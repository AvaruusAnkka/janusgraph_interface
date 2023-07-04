import axios from 'axios'

const BASE_URL = 'localhost:3000/'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

const getVertex = async () => {
  return await instance.get(`vertex`)
}

const getOldData = async () => {
  return await axios({
    method: 'get',
    url: 'https://graphdb.server.nome.fi/data',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHMmhSeklVSzdMOFR1aThYU0FhMHNaU0psbEZPWTMyNlR0dFlCT094RThrIn0.eyJleHAiOjE2ODg0NjAwODEsImlhdCI6MTY4ODQ1OTE4MSwianRpIjoiYTg3ODJkZGQtNWRhMS00ZTYwLWFlYmQtMzQ0OTUyOTM0YTkwIiwiaXNzIjoiaHR0cHM6Ly9rZXlzLnNlcnZlci5ub21lLmZpL3JlYWxtcy9ub21lIiwiYXVkIjpbIm5vbWUtZ3JhcGhkYiIsImFjY291bnQiXSwic3ViIjoiMTQ5NjVjYTUtOGNhZS00NzIzLThmMTItNTc5YTA4OGFmZDA4IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibm9tZS1ncmFwaGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjY2ODA4YWU5LWM3NmMtNDUwMC04ZjY3LWU4Yzk0YzQ0ZjZjMCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDozMDAxIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImFwcC1hZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1ub21lIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsibm9tZS1ncmFwaGRiIjp7InJvbGVzIjpbImFkbWluIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Imdvb2Qtc2VydmljZSBlbWFpbCBwcm9maWxlIiwic2lkIjoiNjY4MDhhZTktYzc2Yy00NTAwLThmNjctZThjOTRjNDRmNmMwIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5Abm9tZS5maSJ9.Z5b64Vr1outCvc-Mwg6uHMpNVKbk4-JIshjqZpQ_cM-ZL6aCF_9Sy9Rm_T32wxVaFgPtYBUzPbZBSjjHpWYG6WuXhWgN-B90K-g612-Uk9Ue33ITBKqipFMb1NpOGAeDQztlQ-HVHtMNZiGRxikEXYPHtPCY-UDuSkCdWdhIeyuRSjQJ3GkpKLWEow-rWCZah2ZMiqDj6zIBMxUPKG7Slsnf7G0dae6Wlthg0Gf4FGDsLuNH-W-hBHF5XHLq0qcBPYTU7YCsTp4AAkVb2cL5XB4f_SsA4fku4anPkkxhLDR1IsrEGR8E_uC2EA-tWfH_CB2BUvCqaMW-rwv3RF5fWQ',
    },
  })
}

export { getVertex, getOldData }
