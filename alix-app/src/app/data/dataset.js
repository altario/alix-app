export const dossiers = [
  'dossier1',
  'dossier2',
  'dossier3',
  'dossier4',
  'dossier5',
  'dossier6'
];

export const dossiersMainData = {
  dossier1: {
    status: 'building',
    client: {
      clientName: {
        label: 'Client Name',
        value: 'ACME & Company S.p.A.'
      }
    },
    financial: {
      clientPortfolio: {
        clientCreditRating: {
          label: 'Client Credit Rating',
          value: 'Baa'
        },
        clientPortfolioDuration: {
          label: 'Client Portfolio Duration',
          value: '4.7y'
        },
        probabilityOfDefaultInT0: {
          label: 'Probability of Default in T0',
          value: '0.00913'
        },
        probabilityOfDefaultToday: {
          label: 'Probability of Default Today',
          value: '0.031'
        },
        openPositions: {
          label: 'Open Positions',
          value: '4'
        },
        totalPositions: {
          label: 'Total Positions',
          value: '10'
        },
        openPositionsLoansOriginalValue: {
          label: 'Open Positions Loans Original Value',
          value: '495000000'
        },
        currentClientsExposure: {
          label: 'Current Clients Exposure',
          value: '119960775'
        },
        totalLoansOriginalValue: {
          label: 'Total Loans Original Value',
          value: '675000000'
        }
      },
      instrument: {
        instrumentType: {
          label: 'Instrument Type',
          value: 'Loan'
        },
        instrument: {
          label: 'Instrument',
          value: 'Loan XYZ Alpha 2009'
        }
      },
      keyFinancial: {
        status: {
          label: 'Status',
          value: 'Performing'
        },
        raroc: {
          label: 'RAROC',
          value: '0.0834'
        },
        absorbedRegulatoryCapital: {
          label: 'Absorbed Regulatory Capital',
          value: '9139101.65082353'
        },
        expectedLoss: {
          label: 'Expected Loss',
          value: '145030012'
        }
      },
      position: {
        loanOriginalValue: {
          label: 'Loan Original Value',
          value: '54477239.2156863'
        },
        currentExposure: {
          label: 'Current Exposure',
          value: '0.977810728914591'
        },
        timeToMaturity: {
          label: 'Time to Maturity',
          value: '15.972602739726'
        },
        totalMaturity: {
          label: 'Total Maturity',
          value: '20.0109589041096'
        },
        startDate: {
          label: 'Start Date',
          value: '41958'
        },
        endDate: {
          label: 'End Date',
          value: '49262'
        }
      },
      duration: {
        totalDuration: {
          label: 'Total Duration',
          value: '17.4942952449919'
        },
        timeToDuration: {
          label: 'Time to Duration',
          value: '13.2162921348315'
        },
        today: {
          label: 'Today',
          value: 'DEV NOTE>>>Dynamic'
        },
        durationDate: {
          label: 'Duration Date',
          value: '48255.9466292135'
        }
      },
      collateral: {
        valuationAtT0: {
          label: 'Valuation at T0',
          value: '68096549.0196078'
        },
        loanToValue: {
          label: 'Loan to Value',
          value: '0.8'
        },
        adjustedCollateralValuation: {
          label: 'Adjusted Collateral Valuation',
          value: '61296700.0207059'
        },
        adjustedLoanToValue: {
          label: 'Adjusted Loan to Value',
          value: '0.888746689418582'
        },
        adjustedLoanToValueDifference: {
          label: 'Adjusted Loan to Value difference',
          value: '0.0998559999999999'
        },
        adjustedLoanToValueColor: {
          label: 'Adjusted Loan to Value color',
          value: 'success'
        }
      },
      collateralAsset: {
        neighborhood: {
          label: 'Neighborhood',
          value: 'Isola, Centro Direzionale'
        },
        city: {
          label: 'City',
          value: 'Milan'
        },
        status: {
          label: 'Status',
          value: 'New'
        },
        typeOfNeighborhood: {
          label: 'Type of Neighborhood',
          value: 'Residential'
        },
        typeOfNeighborhoodIcon: {
          label: 'Type of Neighborhood Icon',
          value: 'house.svg'
        },
        totalArea: {
          label: 'Total Area',
          value: '68432'
        },
        height: {
          label: 'Height',
          value: '120'
        },
        floor: {
          label: 'Floor',
          value: 'several'
        },
        numberOfFloors: {
          label: 'Number of floors',
          value: '30'
        },
        numberOfUnits: {
          label: 'Number of Units',
          value: '306'
        },
        rooms: {
          label: 'Rooms',
          value: '1071'
        },
        investment: {
          label: 'Investment',
          value: '150000000'
        },
        assetImage: {
          label: 'Asset Image',
          value: 'asset1.jpg'
        }
      }
    }
  },
  dossier2: {
    satus: 'empty'
  }
};
