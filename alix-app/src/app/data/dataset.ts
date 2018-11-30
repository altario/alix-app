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
    client: {
      clientName: {
        label: 'Client Name',
        value: 'ACME & Company S.p.A.'
      }
    },
    financial: {
      clientPortfolio: {
        clientCreditRating: {
          value: 'Baa',
          label: 'Client Credit Rating'
        },
        clientPortfolioDuration: {
          value: '4.7',
          label: 'Client Portfolio Duration'
        },
        probabilityOfDefaultInT0: {
          value: '0.00913',
          label: 'Probability of Default in T0'
        },
        probabilityOfDefaultToday: {
          value: '0.031',
          label: 'Probability of Default Today'
        },
        openPositions: {
          value: '4',
          label: 'Open Positions'
        },
        totalPositions: {
          value: '10',
          label: 'Total Positions'
        },
        openPositionsLoansOriginalValue: {
          value: '495000000',
          label: 'Open Positions Loans Original Value'
        },
        currentClientsExposure: {
          value: '119960775',
          label: 'Current Clients Exposure'
        },
        totalLoansOriginalValue: {
          value: '675000000',
          label: 'Total Loans Original Value'
        }
      },
      instrument: {
        instrumentType: {
          value: 'Loan',
          label: 'Instrument Type'
        },
        instrument: {
          value: 'Loan XYZ Alpha 2009',
          label: 'Instrument'
        }
      },
      keyFinancial: {
        status: {
          value: 'Performing',
          label: 'Status'
        },
        raroc: {
          value: '0.0834',
          label: 'RAROC'
        },
        absorbedRegulatoryCapital: {
          value: '9139101.65082353',
          label: 'Absorbed Regulatory Capital'
        },
        expectedLoss: {
          value: '145030012',
          label: 'Expected Loss'
        }
      },
      position: {
        loanOriginalValue: {
          value: '54477239.2156863',
          label: 'Loan Original Value'
        },
        currentExposure: {
          value: '0.977810728914591',
          label: 'Current Exposure'
        },
        timeToMaturity: {
          value: '15.9698630136986',
          label: 'Time to Maturity'
        },
        totalMaturity: {
          value: '20.0109589041096',
          label: 'Total Maturity'
        },
        startDate: {
          value: '41958',
          label: 'Start Date'
        },
        endDate: {
          value: '49262',
          label: 'End Date'
        }
      },
      duration: {
        totalDuration: {
          value: '17.4942952449919',
          label: 'Total Duration'
        },
        timeToDuration: {
          value: '13.2134831460674',
          label: 'Time to Duration'
        },
        today: {
          value: 'DEV NOTE>>>Dynamic',
          label: 'Today'
        },
        durationDate: {
          value: '48255.9213483146',
          label: 'Duration Date'
        }
      },
      collateral: {
        valuationAtT0: {
          value: '68096549.0196078',
          label: 'Valuation at T0'
        },
        loanToValue: {
          value: '0.8',
          label: 'Loan to Value'
        },
        adjustedCollateralValuation: {
          value: '61296700.0207059',
          label: 'Adjusted Collateral Valuation'
        },
        adjustedLoanToValue: {
          value: '0.888746689418582',
          label: 'Adjusted Loan to Value'
        },
        adjustedLoanToValueDifference: {
          value: '0.0998559999999999',
          label: 'Adjusted Loan to Value difference'
        },
        adjustedLoanToValueColor: {
          value: 'success'
        }
      },
      collateralAsset: {
        address: {
          value: 'Via Melchiorre Gioia,11 Milano MI, Italy',
          label: 'Address'
        },
        neighborhood: {
          value: 'Porta Nuova',
          label: 'Neighborhood'
        },
        city: {
          value: 'Milan',
          label: 'City'
        },
        status: {
          value: 'New',
          label: 'Status'
        },
        typeOfNeighborhood: {
          value: 'Residential',
          label: 'Type of Neighborhood'
        },
        typeOfNeighborhoodIcon: {
          value: 'house.svg',
          label: 'Type of Neighborhood Icon'
        },
        totalArea: {
          value: '6709.01960784314',
          label: 'Total Area'
        },
        floor: {
          value: 'several',
          label: 'Floor'
        },
        numberOfFloors: {
          value: '30',
          label: 'Number of floors'
        },
        assetImage: {
          value: 'asset1.jpg'
        }
      }
    },
    stateOfConservation: {
      comparableAssets: {
        comparisonCriteria: {
          value: 'Grade A'
        },
        populations: {
          population1: {
            populationName: {
              value: 'Radius 1km'
            },
            comparableGradeAssetsAbs: {
              value: '1537'
            },
            comparableGradeAssetsPerc: {
              value: '0.708621484555095'
            },
            totalAssetsInAndOutsideRange: {
              value: '2169'
            },
            growth1YPerc: {
              value: '0.089'
            },
            growth1YAbs: {
              value: '126',
              label: '1 Year Ago'
            },
            growth5Y: {
              value: '0.532'
            },
            growth5YAbs: {
              value: '534',
              label: '5 Years Ago'
            }
          },
          population2: {
            populationName: {
              value: 'Porta Nuova'
            },
            comparableGradeAssetsAbs: {
              value: '1101'
            },
            comparableGradeAssetsPerc: {
              value: '0.72962226640159'
            },
            totalAssetsInAndOutsideRange: {
              value: '1509'
            },
            growth1YPerc: {
              value: '0.0947'
            },
            growth1YAbs: {
              value: '95',
              label: '1 Year Ago'
            },
            growth5Y: {
              value: '0.5765'
            },
            growth5YAbs: {
              value: '403',
              label: '5 Years Ago'
            }
          },
          population3: {
            populationName: {
              value: 'Milano'
            },
            comparableGradeAssetsAbs: {
              value: '20107'
            },
            comparableGradeAssetsPerc: {
              value: '0.64968173446638'
            },
            totalAssetsInAndOutsideRange: {
              value: '30949.'
            },
            growth1YPerc: {
              value: '0.081'
            },
            growth1YAbs: {
              value: '1507',
              label: '1 Year Ago'
            },
            growth5Y: {
              value: '0.378'
            },
            growth5YAbs: {
              value: '5515',
              label: '5 Years Ago'
            }
          }
        }
      },
      stateOfConservationToday: {
        populations: {
          population1: {
            populationName: {
              value: 'Radius 1km'
            },
            new: {
              value: '340'
            },
            newVsLastYearPerc: {
              value: '0.0897435897435897'
            },
            newComparables: {
              value: '64'
            },
            newComparablesVsLastYearPerc: {
              value: '0.10051282051282'
            },
            inConstruction: {
              value: '68'
            },
            inConstructionVsLastYearPerc: {
              value: '0.096774193548387'
            },
            inConstructionComparables: {
              value: '21'
            },
            inConstructionComparablesVsLastYearPerc: {
              value: '0.108387096774193'
            },
            renovated: {
              value: '1129'
            },
            renovatedVsLastYearPerc: {
              value: '0.0887174541947926'
            },
            renovatedComparables: {
              value: '127'
            },
            renovatedComparablesVsLastYearPerc: {
              value: '0.0993635486981677'
            },
            used: {
              value: '489'
            },
            usedVsLastYearPerc: {
              value: '-0.101102941176471'
            },
            usedComparables: {
              value: '-'
            },
            usedComparablesVsLastYearPerc: {
              value: '-'
            },
            needsRenovation: {
              value: '124'
            },
            needsRenovationVsLastYearPerc: {
              value: '-0.101449275362319'
            },
            needsRenovationComparables: {
              value: '-'
            },
            needsRenovationComparablesVsLastYearPerc: {
              value: '-'
            },
            ruin: {
              value: '19'
            },
            ruinVsLastYearPerc: {
              value: '-0.0952380952380952'
            },
            ruinComparables: {
              value: '-'
            },
            ruinComparablesVsLastYearPerc: {
              value: '-'
            }
          },
          population2: {
            populationName: {
              value: 'Porta Nuova'
            },
            new: {
              value: '256'
            },
            newVsLastYearPerc: {
              value: '0.0940170940170941'
            },
            newComparables: {
              value: '27'
            },
            newComparablesVsLastYearPerc: {
              value: '0.105299145299145'
            },
            inConstruction: {
              value: '56'
            },
            inConstructionVsLastYearPerc: {
              value: '0.0980392156862746'
            },
            inConstructionComparables: {
              value: '9'
            },
            inConstructionComparablesVsLastYearPerc: {
              value: '0.109803921568628'
            },
            renovated: {
              value: '789'
            },
            renovatedVsLastYearPerc: {
              value: '0.0943134535367545'
            },
            renovatedComparables: {
              value: '54'
            },
            renovatedComparablesVsLastYearPerc: {
              value: '0.105631067961165'
            },
            used: {
              value: '321'
            },
            usedVsLastYearPerc: {
              value: '-0.150793650793651'
            },
            usedComparables: {
              value: '-'
            },
            usedComparablesVsLastYearPerc: {
              value: '-'
            },
            needsRenovation: {
              value: '78'
            },
            needsRenovationVsLastYearPerc: {
              value: '-0.152173913043478'
            },
            needsRenovationComparables: {
              value: '-'
            },
            needsRenovationComparablesVsLastYearPerc: {
              value: '-'
            },
            ruin: {
              value: '9'
            },
            ruinVsLastYearPerc: {
              value: '-0.181818181818182'
            },
            ruinComparables: {
              value: '-'
            },
            ruinComparablesVsLastYearPerc: {
              value: '-'
            }
          },
          population3: {
            populationName: {
              value: 'Milano'
            },
            new: {
              value: '8765'
            },
            newVsLastYearPerc: {
              value: '0.0810310804144054'
            },
            newComparables: {
              value: '697'
            },
            newComparablesVsLastYearPerc: {
              value: '0.0907548100641341'
            },
            inConstruction: {
              value: '987'
            },
            inConstructionVsLastYearPerc: {
              value: '0.0810514786418402'
            },
            inConstructionComparables: {
              value: '232'
            },
            inConstructionComparablesVsLastYearPerc: {
              value: '0.090777656078861'
            },
            renovated: {
              value: '10355'
            },
            renovatedVsLastYearPerc: {
              value: '0.0810105438981104'
            },
            renovatedComparables: {
              value: '1394'
            },
            renovatedComparablesVsLastYearPerc: {
              value: '0.0907318091658836'
            },
            used: {
              value: '7898'
            },
            usedVsLastYearPerc: {
              value: '-0.0699481865284974'
            },
            usedComparables: {
              value: '-'
            },
            usedComparablesVsLastYearPerc: {
              value: '-'
            },
            needsRenovation: {
              value: '2043'
            },
            needsRenovationVsLastYearPerc: {
              value: '-0.0700955848884843'
            },
            needsRenovationComparables: {
              value: '-'
            },
            needsRenovationComparablesVsLastYearPerc: {
              value: '-'
            },
            ruin: {
              value: '901'
            },
            ruinVsLastYearPerc: {
              value: '-0.0701754385964912'
            },
            ruinComparables: {
              value: '-'
            },
            ruinComparablesVsLastYearPerc: {
              value: '-'
            }
          }
        }
      },
      panelFromMapStateOfConservationBreakdownAllAssets: {
        years: {
          2018: {
            new: {
              value: '0.156754264638082'
            },
            inConstruction: {
              value: '0.0313508529276164'
            },
            renovated: {
              value: '0.520516366989396'
            },
            used: {
              value: '0.225449515905947'
            },
            needsRenovation: {
              value: '0.0571692023974182'
            },
            ruin: {
              value: '0.00875979714153988'
            }
          },
          2015: {
            new: {
              value: '0.169648774022531'
            },
            inConstruction: {
              value: '0.0371106693174288'
            },
            renovated: {
              value: '0.52286282306163'
            },
            used: {
              value: '0.21272365805169'
            },
            needsRenovation: {
              value: '0.0516898608349901'
            },
            ruin: {
              value: '0.00596421471172962'
            }
          },
          2013: {
            new: {
              value: '0.283207858089114'
            },
            inConstruction: {
              value: '0.0318911758053572'
            },
            renovated: {
              value: '0.334582700571909'
            },
            used: {
              value: '0.255194028886232'
            },
            needsRenovation: {
              value: '0.0660118259071376'
            },
            ruin: {
              value: '0.0291124107402501'
            }
          }
        }
      },
      stateOfConservationPricePerSqm: {
        populations: {
          population1: {
            populationName: {
              value: 'Radius 1km'
            },
            new: {
              value: '9750'
            },
            newVsLastYearPerc: {
              value: '0.0372760000000001'
            },
            inConstruction: {
              value: '9067.5'
            },
            inConstructionVsLastYearPerc: {
              value: '0.0306310000000001'
            },
            renovated: {
              value: '7820'
            },
            renovatedVsLastYearPerc: {
              value: '0.033155'
            },
            used: {
              value: '6235'
            },
            usedVsLastYearPerc: {
              value: '0.030845'
            },
            needsRenovation: {
              value: '5870'
            },
            needsRenovationVsLastYearPerc: {
              value: '0.029455'
            },
            ruin: {
              value: '5250'
            },
            ruinVsLastYearPerc: {
              value: '0.0344310000000001'
            }
          },
          population2: {
            populationName: {
              value: 'Porta Nuova'
            },
            new: {
              value: '9134'
            },
            newVsLastYearPerc: {
              value: '0.0288379999999999'
            },
            inConstruction: {
              value: '8494.62'
            },
            inConstructionVsLastYearPerc: {
              value: '0.034602'
            },
            renovated: {
              value: '7144'
            },
            renovatedVsLastYearPerc: {
              value: '0.0328040000000001'
            },
            used: {
              value: '6010'
            },
            usedVsLastYearPerc: {
              value: '0.0334110000000001'
            },
            needsRenovation: {
              value: '5660'
            },
            needsRenovationVsLastYearPerc: {
              value: '0.0283659999999999'
            },
            ruin: {
              value: '4990'
            },
            ruinVsLastYearPerc: {
              value: '0.0344439999999999'
            }
          },
          population3: {
            populationName: {
              value: 'Milano'
            },
            new: {
              value: '3435'
            },
            newVsLastYearPerc: {
              value: '0.0250269999999999'
            },
            inConstruction: {
              value: '3320'
            },
            inConstructionVsLastYearPerc: {
              value: '0.027085'
            },
            renovated: {
              value: '2870'
            },
            renovatedVsLastYearPerc: {
              value: '0.0203850000000001'
            },
            used: {
              value: '2050'
            },
            usedVsLastYearPerc: {
              value: '0.028516'
            },
            needsRenovation: {
              value: '1870'
            },
            needsRenovationVsLastYearPerc: {
              value: '0.025692'
            },
            ruin: {
              value: '1670'
            },
            ruinVsLastYearPerc: {
              value: '0.0211380000000001'
            }
          }
        }
      }
    },
    demandAndOffer: {
      replacementIndicators: {
        exposureAfterReplacement: {
          value: '0.730054559212928'
        },
        timeReplacementIsFulfilled: {
          value: '5.48354019383852',
          label: 'Time Until Replacement'
        },
        timeUntilReplacementIsFulfilled: {
          value: 'Y',
          label: 'Time Until Replacement'
        },
        replacementCost: {
          value: '14705882.3529412',
          label: 'Replacement Cost:'
        },
        replacementCostSqm: {
          value: '2191.95697919102',
          label: 'per SQM'
        },
        numberOfUnitsPurchased: {
          value: '30'
        },
        marketPrice: {
          value: '68096549.0196078'
        },
        marketPriceSqmForSale: {
          value: '10150'
        },
        ltvLoanToValue: {
          value: '0.8',
          label: 'Loan to Value:'
        },
        exposure: {
          value: '54477239.2156863'
        },
        exposureAfterReplacementAbs: {
          value: '39771356.8627451',
          label: 'Exposure after Replacement:'
        },
        exposureAfterReplacementPerc: {
          value: '0.730054559212928',
          label: '% Exposure after Replacement:'
        },
        monthlyInstallment: {
          value: '604405.11447078',
          label: 'Monthly Installment:'
        }
      },
      forSale: {
        populations: {
          population1: {
            populationName: {
              value: 'Radius 1km'
            },
            priceSqmForSale: {
              value: '9750'
            },
            absPeerAssetsLuxurySale5Y: {
              value: '325'
            },
            averageSqm: {
              value: '128'
            },
            avgDaysFromListingToUnlisting: {
              value: '114'
            },
            demandRate: {
              value: '0.687671232876712'
            }
          },
          population2: {
            populationName: {
              value: 'Porta Nuova'
            },
            priceSqmForSale: {
              value: '9134'
            },
            absPeerAssetsLuxurySale5Y: {
              value: '143'
            },
            averageSqm: {
              value: '151'
            },
            avgDaysFromListingToUnlisting: {
              value: '102'
            },
            demandRate: {
              value: '0.72054794520548'
            }
          },
          population3: {
            populationName: {
              value: 'Milano'
            },
            priceSqmForSale: {
              value: '3435'
            },
            absPeerAssetsLuxurySale5Y: {
              value: '6365'
            },
            averageSqm: {
              value: '114'
            },
            avgDaysFromListingToUnlisting: {
              value: '135'
            },
            demandRate: {
              value: '0.63013698630137'
            }
          }
        }
      },
      longRent: {
        populations: {
          population1: {
            populationName: {
              value: 'Radius 1km'
            },
            absPeerAssetsLuxuryLongRent5Y: {
              value: '175'
            },
            averageSqm: {
              value: '121'
            },
            priceSqmLongRent: {
              value: '35.1239669421488',
              label: '€ SQM'
            },
            pricePMonth: {
              value: '4250',
              label: 'AVG Asset Rent'
            },
            avgDaysFromListingToUnlisting: {
              value: '52',
              label: 'days average from listing to unlisting'
            },
            demandRate: {
              value: '0.857534246575343'
            }
          },
          population2: {
            populationName: {
              value: 'Porta Nuova'
            },
            absPeerAssetsLuxuryLongRent5Y: {
              value: '25'
            },
            averageSqm: {
              value: '145'
            },
            priceSqmLongRent: {
              value: '33.25',
              label: '€ SQM'
            },
            pricePMonth: {
              value: '3820',
              label: 'AVG Asset Rent'
            },
            avgDaysFromListingToUnlisting: {
              value: '48',
              label: 'days average from listing to unlisting'
            },
            demandRate: {
              value: '0.868493150684932'
            }
          },
          population3: {
            populationName: {
              value: 'Milano'
            },
            absPeerAssetsLuxuryLongRent5Y: {
              value: '3635'
            },
            averageSqm: {
              value: '115'
            },
            priceSqmLongRent: {
              value: '24.3478260869565',
              label: '€ SQM'
            },
            pricePMonth: {
              value: '2800',
              label: 'AVG Asset Rent'
            },
            avgDaysFromListingToUnlisting: {
              value: '60',
              label: 'days average from listing to unlisting'
            },
            demandRate: {
              value: '0.835616438356164'
            }
          }
        }
      },
      shortRent: {
        populations: {
          population1: {
            populationName: {
              value: 'Radius 1km'
            },
            absPeerAssetsLuxuryShortRent5Y: {
              value: '560'
            },
            priceAssetsLuxuryShortRent5Y: {
              value: '189'
            },
            averageSqm: {
              value: '119'
            },
            priceSqmForSale: {
              value: '47.6470588235294',
              label: '€ SQM'
            },
            pricePMonth: {
              value: '5670',
              label: 'AVG Asset Rent'
            },
            avgOccupancyRate: {
              value: '0.77'
            },
            growth1Y: {
              value: '0.14',
              label: '1 Year Ago'
            },
            growth5Y: {
              value: '0.38',
              label: '5 Years Ago'
            },
            currentViews: {
              value: '760'
            },
            topOccupancy: {
              value: '0.85'
            },
            viewsToEnsureTopOccupancy: {
              value: '894'
            }
          },
          population2: {
            populationName: {
              value: 'Porta Nuova'
            },
            absPeerAssetsLuxuryShortRent5Y: {
              value: '280'
            },
            priceAssetsLuxuryShortRent5Y: {
              value: '166'
            },
            averageSqm: {
              value: '132'
            },
            priceSqmForSale: {
              value: '37.7272727272727',
              label: '€ SQM'
            },
            pricePMonth: {
              value: '4980',
              label: 'AVG Asset Rent'
            },
            avgOccupancyRate: {
              value: '0.75'
            },
            growth1Y: {
              value: '0.07',
              label: '1 Year Ago'
            },
            growth5Y: {
              value: '0.25',
              label: '5 Years Ago'
            },
            currentViews: {
              value: '440'
            },
            topOccupancy: {
              value: '0.8'
            },
            viewsToEnsureTopOccupancy: {
              value: '550'
            }
          },
          population3: {
            populationName: {
              value: 'Milano'
            },
            absPeerAssetsLuxuryShortRent5Y: {
              value: '1620'
            },
            priceAssetsLuxuryShortRent5Y: {
              value: '128'
            },
            averageSqm: {
              value: '111'
            },
            priceSqmForSale: {
              value: '34.5945945945946',
              label: '€ SQM'
            },
            pricePMonth: {
              value: '3840',
              label: 'AVG Asset Rent'
            },
            avgOccupancyRate: {
              value: '0.77'
            },
            growth1Y: {
              value: '0.12',
              label: '1 Year Ago'
            },
            growth5Y: {
              value: '0.31',
              label: '5 Years Ago'
            },
            currentViews: {
              value: '680',
              label: 'Current Views'
            },
            topOccupancy: {
              value: '0.85',
              label: 'Top Occupancy'
            },
            viewsToEnsureTopOccupancy: {
              value: '800',
              label: 'Views To Ensure Top Occupancy'
            }
          }
        }
      }
    },
    location: {
      typeOfNeighborhood: {
        modeTypeOfNeighborhood: {
          value: 'Residential'
        },
        residential: {
          value: '0.4143'
        },
        absResidential: {
          value: '301'
        },
        retail: {
          value: '0.165432'
        },
        absRetail: {
          value: '120.19076031861'
        },
        hospitality: {
          value: '0.0331877729257642'
        },
        absHospitality: {
          value: '24.111802198057'
        },
        offices: {
          value: '0.382713414847162'
        },
        absOffices: {
          value: '278.051503425044'
        },
        warehouse: {
          value: '0.00436681222707424'
        },
        absWarehouse: {
          value: '3.17260555237592'
        },
        absFactories: {
          value: '0'
        },
        factories: {
          value: '0'
        }
      },
      architecture: {
        architectureSnapshot: {
          value: 'asset1Architecture.jpg'
        },
        _19ThCentury: {
          value: '0.0821',
          label: '19th Century'
        },
        _1900To1950: {
          value: '0.1128',
          label: '1900 - 1950'
        },
        _1950To1970: {
          value: '0.2667',
          label: '1950 - 1970'
        },
        _1970To1990: {
          value: '0.2325',
          label: '1970 - 1990'
        },
        _1990To2000: {
          value: '0.0745',
          label: '1990 - 2000'
        },
        after2000: {
          value: '0.2314',
          label: '> 2000'
        }
      },
      vehicles: {
        years: {
          2018: {
            averagePrice: {
              value: '32135'
            },
            greater100K: {
              value: '0.0234',
              label: '> 100K €'
            },
            _80K: {
              value: '0.0378',
              label: '80K €'
            },
            _60K: {
              value: '0.1545',
              label: '60K €'
            },
            _40K: {
              value: '0.2245',
              label: '40K €'
            },
            _20K: {
              value: '0.2923',
              label: '20K €'
            },
            smaller20K: {
              value: '0.2675',
              label: '< 20K €'
            },
            averagePriceVsMilanPerc: {
              value: '0.411224803478108',
              label: 'Milano'
            },
            greater100KVsMilanPerc: {
              value: '1.96202531645569',
              label: 'Milano'
            },
            _80KVsMilanPerc: {
              value: '1.82089552238806',
              label: 'Milano'
            },
            _60KVsMilanPerc: {
              value: '1.04095112285337',
              label: 'Milano'
            },
            _40KVsMilanPerc: {
              value: '0.85078318219291',
              label: 'Milano'
            },
            _20KVsMilanPerc: {
              value: '-0.209572742022715',
              label: 'Milano'
            },
            smaller20KVsMilanPerc: {
              value: '-0.3505705268269',
              label: 'Milano'
            }
          },
          2013: {
            averagePrice: {
              value: '22494.5'
            },
            greater100K: {
              value: '0.01638',
              label: '> 100K €'
            },
            _80K: {
              value: '0.029484',
              label: '80K €'
            },
            _60K: {
              value: '0.112785',
              label: '60K €'
            },
            _40K: {
              value: '0.159395',
              label: '40K €'
            },
            _20K: {
              value: '0.198764',
              label: '20K €'
            },
            smaller20K: {
              value: '0.483192',
              label: '< 20K €'
            },
            averagePriceVsMilanPerc: {
              value: '0.0398498551943953',
              label: 'Milano'
            },
            greater100KVsMilanPerc: {
              value: '1.07341772151898',
              label: 'Milano'
            },
            _80KVsMilanPerc: {
              value: '1.20029850746269',
              label: 'Milano'
            },
            _60KVsMilanPerc: {
              value: '0.489894319682959',
              label: 'Milano'
            },
            _40KVsMilanPerc: {
              value: '0.314056059356966',
              label: 'Milano'
            },
            _20KVsMilanPerc: {
              value: '-0.462509464575446',
              label: 'Milano'
            },
            smaller20KVsMilanPerc: {
              value: '0.173080844865259',
              label: 'Milano'
            }
          },
          2008: {
            averagePrice: {
              value: '17995.6'
            },
            greater100K: {
              value: '0.0119574',
              label: '> 100K €'
            },
            _80K: {
              value: '0.01680588',
              label: '80K €'
            },
            _60K: {
              value: '0.06203175',
              label: '60K €'
            },
            _40K: {
              value: '0.11317045',
              label: '40K €'
            },
            _20K: {
              value: '0.14112244',
              label: '20K €'
            },
            smaller20K: {
              value: '0.65491208',
              label: '< 20K €'
            },
            averagePriceVsMilanPerc: {
              value: '-0.124336964046825',
              label: 'Milano'
            },
            greater100KVsMilanPerc: {
              value: '0.513594936708857',
              label: 'Milano'
            },
            _80KVsMilanPerc: {
              value: '0.254170149253731',
              label: 'Milano'
            },
            _60KVsMilanPerc: {
              value: '-0.180558124174373',
              label: 'Milano'
            },
            _40KVsMilanPerc: {
              value: '-0.067020197856554',
              label: 'Milano'
            },
            _20KVsMilanPerc: {
              value: '-0.618381719848567',
              label: 'Milano'
            },
            smaller20KVsMilanPerc: {
              value: '0.589978344258315',
              label: 'Milano'
            }
          },
          2003: {
            averagePrice: {
              value: '23458.55'
            },
            greater100K: {
              value: '0.00717444',
              label: '> 100K €'
            },
            _80K: {
              value: '0.0114279984',
              label: '80K €'
            },
            _60K: {
              value: '0.04714413',
              label: '60K €'
            },
            _40K: {
              value: '0.083746133',
              label: '40K €'
            },
            _20K: {
              value: '0.1505072986',
              label: '20K €'
            },
            smaller20K: {
              value: '0.7',
              label: '< 20K €'
            },
            averagePriceVsMilanPerc: {
              value: '0.201567699710184',
              label: 'Milano'
            },
            greater100KVsMilanPerc: {
              value: '-0.0682545454545456',
              label: 'Milano'
            },
            _80KVsMilanPerc: {
              value: '-0.134242545454545',
              label: 'Milano'
            },
            _60KVsMilanPerc: {
              value: '-0.356833151432469',
              label: 'Milano'
            },
            _40KVsMilanPerc: {
              value: '-0.381490893648449',
              label: 'Milano'
            },
            _20KVsMilanPerc: {
              value: '-0.581226214245965',
              label: 'Milano'
            },
            smaller20KVsMilanPerc: {
              value: '0.70316301703163',
              label: 'Milano'
            }
          }
        }
      },
      streetConditions: {
        xxiCentury: {
          value: '0.2314'
        },
        xxiCenturyGrowth3Y: {
          value: '0.44'
        },
        xxCentury: {
          value: '0.6865'
        },
        xxCenturyGrowth3Y: {
          value: '-0.25'
        },
        beforeXxCentury: {
          value: '0.0821'
        },
        beforeXxCenturyGrowth3Y: {
          value: '-0.08'
        }
      },
      retailersBreakdown: {
        fashionRetailers: {
          value: '14.4228912382332'
        },
        fashionRetailersRating: {
          value: '4.2'
        },
        growth2YFashionRetailersRating: {
          value: '0.2'
        },
        museumArtGalleries: {
          value: '6.00953801593048'
        },
        growth2YMuseumArtGalleries: {
          value: '4.6'
        },
        growthGrowth2YMuseumArtGalleries: {
          value: '0.4'
        },
        barsRestaurants: {
          value: '75.7201790007241'
        },
        growth2YBarsRestaurants: {
          value: '4.1'
        },
        growthGrowth2YBarsRestaurants: {
          value: '0.2'
        },
        total: {
          value: '120.19076031861'
        }
      },
      accommodation: {
        averageBookingNightRate: {
          value: '152'
        },
        averageBookingNightRateVsMilan: {
          value: '0.617021276595745'
        },
        medianBookingNightRate: {
          value: '121'
        },
        medianBookingNightRateVsMilan: {
          value: '0.475609756097561'
        },
        averageAirbnbNightRate: {
          value: '107'
        },
        averageAirbnbNightRateVsMilan: {
          value: '0.621212121212121'
        },
        medianAirbnbNightRate: {
          value: '82'
        },
        medianAirbnbNightRateVsMilan: {
          value: '0.413793103448276'
        },
        numberOfBookingsNeighborhood: {
          value: '18'
        },
        numberOfBookingsMilan: {
          value: '1166'
        },
        numberOfAirbnbNeighborhood: {
          value: '651'
        },
        numberOfAirbnbMilan: {
          value: '13025'
        }
      },
      timeShift: {
        daylife: {
          value: '0.82'
        },
        daylifeGrowth3Y: {
          value: '-0.0681818181818182'
        },
        nightlife: {
          value: '0.18'
        },
        nightlifeGrowth3Y: {
          value: '0.5'
        }
      },
      neighborhoodConnectivity: {
        legendForAll: {
          value: 'Walking'
        },
        iconForAllLegends: {
          value: 'walk.svg'
        },
        supermarketIcon: {
          value: 'supermarket.svg'
        },
        supermarkets: {
          value: '6'
        },
        closestSupermarkets: {
          value: '3'
        },
        pharmaciesIcon: {
          value: 'pharma.svg'
        },
        pharmacies: {
          value: '2'
        },
        closestPharmacies: {
          value: '7'
        },
        clinicsIcon: {
          value: 'clinic.svg'
        },
        clinics: {
          value: '2'
        },
        closestClinics: {
          value: '5'
        }
      },
      publicTransportation500Radius: {
        image: {
          value: 'publicTransportationAsset1.jpg'
        },
        publicTransportationIcon: {
          value: 'metro.svg'
        },
        legendForAll: {
          value: 'Walking'
        },
        iconForAllLegends: {
          value: 'walk.svg'
        },
        metroGioia: {
          value: '2'
        },
        metroGioiaLineColor: {
          value: 'violet'
        },
        metroGaribaldi: {
          value: '12'
        },
        metroGaribaldiLineColor: {
          value: 'green'
        },
        metroIsola: {
          value: '8'
        },
        metroIsolaLineColor: {
          value: 'green'
        },
        stazioneCentrale: {
          value: '13'
        }
      },
      distanceToKeyPoints: {
        linateAirportsTaxi: {
          value: '22'
        },
        linateAirportsPublicTransportation: {
          value: '40'
        },
        airportIcon: {
          value: 'plane.svg'
        },
        fatebenefratelliHospitalTaxi: {
          value: '6'
        },
        fatebenefratelliHospitalpublicTransportation: {
          value: '13'
        },
        fatebenefratelliHospitalWalking: {
          value: '10'
        },
        hospitalIcon: {
          value: 'hospital.svg'
        },
        duomoCathedralTaxi: {
          value: '10'
        },
        duomoCathedralMetro: {
          value: '19'
        },
        duomoCathedralWalking: {
          value: '38'
        },
        duomoIcon: {
          value: 'temple.svg'
        }
      }
    }
  }
};
