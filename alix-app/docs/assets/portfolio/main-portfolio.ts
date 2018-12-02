export const mainPortfolio = {
    position_1: {
        title: "ACME & Comany S.p.A",
        panel_1: {
            clientDuration: {
                title: "client duration",
                label: "Y"
            },
            clientCreditRating: {
                title: "client credit rating",
                condition: "ok"
            },
            probabilityOfDefault: {
                title: "Probability of default",
                probLabel: "%",
                TCDLabel: "%"
            }
        },
        panel_2: {
            loansOriginalValue: {
                title: "Loans Original Value",
                label: "M€"
            },
            clientsCurrentExposure: {
                title: "Clients current exposure",
                label: "M€"
            }
        },
        panel_3: {
            LOV: {
                title: "L.O.V Total Positions",
                label: "B"
            },
            positions: {
                title: "# Positions",
                label: ["open from a total of", "positions"]
            }
        }
    },
    position_2: {
        title: "Loan XYZ Alpha II",

        panel_4: {
            title: "Key Financial",
            status: {
                title: "status",
                condition: "ok"
            },
            riskAROC: {
                title: "Risk Adjustment return on capital",
                label: "%"
            },
            regCapAbs: {
                title: "Regulatory Capital Absorbed",
                label: "M€"
            },
            expectedLoss: {
                title: "Expected Loss",
                label: "K€"
            }
        },
        panel_5: {
            title: "POSITION",
            loanOriginalValue: {
                title: "Loan original Value",
                label: "M€"
            },
            currentExposure: {
                title: "Current Exposure",
                label: "M€"
            },
            timeToMaturity: {
                title: "Time to maturity",
                label: "Y"
            }
        },
        panel_6: {
            title: "DURATION",
            exposureUntilDur: {
                title: "Exposure Until Duration",
                label: "M€"
            },
            timeToDurationDate: {
                title: "Time to duration date",
                label: ["M", "Y"]
            }
        },
        panel_7: {
            title: "COLLATERAL",
            evalIn: {
                title: "Evaluation in to",
                label: "M€"
            },
            loanToVal: {
                title: "Loan to value",
                label: "%"
            },
            currEvalEst: {
                title: "Current Evaluation Estimation",
                label: "M€"
            },
            adjLoanToVal: {
                title: "Adjusted loan to value",
                label: "%"
            }
        }
    },
    position_3: {
        title: "Collateral Asset > Aggregated Data",
        panel_8: {
            img: "assets/images/default.png",
            title: "General",
            status: "renovated",
            category: "Commercial & Office Spaces",
            location: {
                icon: "historical.svg",
                label: "Historical Center",
                estate: ["Office Via Matteotti, Fashion District", "#"],
                address: [
                    "Corso Giacomo Matteotti, 9, 20121",
                    "Milano Mi",
                    "Italy"
                ]
            },
            info: {
                price: {
                    title: "Price in to",
                    label: "M€"
                },
                estimated: {
                    title: "Estimated price today",
                    label: "M€"
                },
                area: {
                    title: "Asset area",
                    label: "SQM"
                },
                pricePsm: {
                    title: "Price per SQM",
                    label: "K€/sqm"
                },
            }
        }
    }
}