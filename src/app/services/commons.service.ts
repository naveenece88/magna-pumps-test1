import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {
  tab = 0;
  productList:any = [
    {
        "Products_Url":"Horizontal-Back-Pullout-Pumps",
        "Type_Url": "Metallic",
        "Products": "Horizontal Back Pullout Pumps",
        "Type": "Metallic",
        "imageUrl": "/assets/img/metalic-horizontal-back-pullout.jpg",
        "Materials_of_Construction": [
            "Casted: ",
            "Stainless steels to various ASTM Specification",
            "Alloy-20",
            "Hastelloy B, C",
            "CD 4MCu",
            "Inconel Alloy",
            "Nickel (CZ 100)",
            "Ni resist",
            "Acid resisting bronzes",
            "",
            "Fabricated:",
            "Titanium"
        ],
        "Description": "Horizontal metallic pumps are the most commonly used centrifugal pumps in the industrial spectrum with a wide range of head and capacity. Our metallic series is offered in back pull out design conforming to required international standards and also customizable to suite the customers requirements.\nThe design is carried out keeping in mind the ease of operation and maintenance, understanding of process parameters and system in which the pump is involved. The pumps are offered in 75 different models with variation in the rpm to suit the desired head and capacity of the process.",
        "Capacity_Range": "1m3/hr to 900m3/hr",
        "Head_Upto": "150m",
        "Impeller_type": "closed / semi open / reverse vane for high slurry applications",
        "Offered_with": "Mechanical seal and gland packing",
        "Designed_as_Per": [
            "ISO 2858",
            "ANSI B 73.1",
            "IS 5199"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "Pump confirm to API 610\n11th Edition\nCasing can withstand 80 bar\npressure and -70 °C to 550 °C temp",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Chemical Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/horizontal_pump.pdf"
    },
    {
        "Products_Url":"Horizontal-Back-Pullout-Pumps-UHMWPE",
        "Type_Url": "Non-Metallic",
        "Products": "Horizontal Back Pullout Pumps - UHMWPE",
        "Type": "Non-Metallic",
        "imageUrl": "/assets/img/metalic-horizontal-back-pullout2.jpg",
        "Materials_of_Construction": [
            "Ultra-High Molecular Weight Poly Ethylene (UHMWPE)"
        ],
        "Description": "Plastic pumps were introduced for handling reducing atmosphere. We specialize in offering fully moulded UHMWPE or in-situ moulded Fluro plastic as per the need of the requirement.\nUHMWPE is preferred for an operating range of -30 °C to 90°C and is capable of wet slurry abrasion resistance.",
        "Capacity_Range": "1.5 m3/hr to 500m3/hr",
        "Head_Upto": "60m",
        "Impeller_type": "Semi open",
        "Offered_with": "Mechanical seal and gland packing",
        "Designed_as_Per": [
            "Manufacturer's Standard"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/horizontal_pump.pdf"
    },
    {
        "Products_Url":"Horizontal-Back-Pullout-Pumps-Lined-Fluro-Plastics",
        "Type_Url": "Non-Metallic",
        "Products": "Horizontal Back Pullout Pumps - Lined Fluro Plastics",
        "Type": "Non-Metallic",
        "imageUrl": "/assets/img/non-metalic-horizontal-back-pullout-lfp.jpg",
        "Materials_of_Construction": [
            "Lined Fluro Plastics"
        ],
        "Description": "A conventional horizontal back pull out pump with a critically designed expeller installed behind the impeller to ensure zero leak during operation of the pump\nThis effectiveness of the hydrodynamic seal is ensured only if the suction head is not more than 3 meters for metallic pumps.\nAn engineer°s delight as it excludes the hassles of operation issues related to the mechanical seal.",
        "Capacity_Range": "1.5m3/hr to 200m3/hr",
        "Head_Upto": "60m",
        "Impeller_type": "Semi open",
        "Offered_with": "Mechanical seal and gland packing",
        "Designed_as_Per": [
            "Manufacturer's Standard"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/horizontal_pump.pdf"
    },
    {
        "Products_Url":"Hydrodynamic-Seal-Pumps",
        "Type_Url": "Metallic",
        "Products": "Hydrodynamic Seal Pumps",
        "Type": "Metallic",
        "imageUrl": "/assets/img/metalic-hydrodynamic-seal-pumps.jpg",
        "Materials_of_Construction": [
            "Casted Pumps:",
            "Stainless steel",
            "R-55",
            "Hastelloy B, C",
            "CZ-100",
            "Inconel",
            "Monel",
            "Acid resisting bronzes"
        ],
        "Description": "A conventional horizontal pump fitted with a gland packing would lead to leak during operation/ ideal condition. An engineer°s delight would be to use a cost-effective gland packing pump with the effectiveness of a mechanical seal of no leak during operation. We have achieved the same with the introduction of a horizontal hydrodynamic seal pump\nThis effectiveness of the hydrodynamic seal is ensured only if the suction head is not more than 3 meters for metallic pumps.",
        "Capacity_Range": "1.5m3/hr to 350m3/hr",
        "Head_Upto": "50m",
        "Impeller_type": "closed / semi open",
        "Offered_with": "Mechanical seal and gland packing",
        "Designed_as_Per": [
            "Manufacturer's Standard"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "Clear liquids and clean slurries",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/hydrodynamic_seal_pump.pdf"
    },
    {
        "Products_Url":"Hydrodynamic-Seal-Pumps",
        "Type_Url": "Non-Metallic",
        "Products": "Hydrodynamic Seal Pumps",
        "Type": "Non-Metallic",
        "imageUrl": "/assets/img/non-metalic-hydrodynamic-seal-pumps.jpg",
        "Materials_of_Construction": [
            "High Molecular Weight Poly Ethylene",
            "Poly Vinylidene Di-Fluoride (PVDF)"
        ],
        "Description": "A conventional horizontal pump fitted with a gland packing would lead to leak during operation/ ideal condition. An engineer°s delight would be to use a cost-effective gland packing pump with the effectiveness of a mechanical seal of no leak during operation. We have achieved the same with the introduction of a horizontal hydrodynamic seal pump.\nThis effectiveness of the hydrodynamic seal is ensured only if the suction head is not more than 3 meters for metallic pumps.",
        "Capacity_Range": "1.5m3/hr to 200m3/hr",
        "Head_Upto": "45m",
        "Impeller_type": "Semi open",
        "Offered_with": "",
        "Designed_as_Per": [
            "Manufacturer's Standard"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "Clear liquids and clean slurries",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/hydrodynamic_seal_pump.pdf"
    },
    {
        "Products_Url":"Vertical-Glandless-Pumps",
        "Type_Url": "Metallic",
        "Products": "Vertical Glandless Pumps",
        "Type": "Metallic",
        "imageUrl": "/assets/img/metalic-vertical-gp.jpg",
        "Materials_of_Construction": [
            "Stainless steel",
            "Worthite",
            "R-55",
            "Hastelloy B and C",
            "Acid Resistance Bronze"
        ],
        "Description": "The beauty of a centrifugal pump was introduced of the world in the form of horizontal pumps, in the industrial spectra with a back pull-out design. These horizontal centrifugal pumps come with their own limitations/ problems.\nWe redefined the view of a centrifugal pump with gland free pumping-vertical glandless pump. A unique design with and zero safe minimum flow and no problems of alignment.\n\nThe Vertical Glandless Pumps in normal hydraulic terms do not differ from any conventional centrifugal pump. The pump is designed in such a way that the liquid would normally try to pass through annular space , where the impeller drive shaft enters the back plate (stuffing box).This liquid is diverted and returns as a controlled flow to the suction tank. The need for any seal is eliminated by allowing the leakage liquid to escape through the overflow connection to the overflow chamber.\nThe liquid entering the suction flows around the impeller casing and leaves through the delivery under pressure. Between the annular gap of the upper rotor casing and impeller some leakage liquid escapes to the overflow chamber. The auxiliary impeller (Expeller) prevents the leakage liquid going further up and channelizes it through outlet in the overflow chamber.\nThese pumps are ideally suited for continuous operation for clear liquid and slurries. This pump is at its best with negative suction.\n\nUniqueness of Vertical Glandless Pumps\nDesigned for continuous operation\nProblems associated with mechanical seal or gland is eliminated\nNo bearing housing\nSelf draining\nSuitable for clear liquids and slurries\nZero safe minimum flow\nCan operate pump safely form fully open to fully closed condition\nPump can run dry indefinitely\nSaves valuable floor space\nWhen to Choose a Vertical Glandless Pump ?\nWhere ever negative suction exist (pump is mounted above the level of the suction tank).\nHeight of the suction tank is less than 5 meters\nPriming of the pump is feasible\nIdeally suited for water based inorganic chemicals like acids, alkalis, salt solutions and its slurries\nContinuous operation like scrubbing\nRecirculation or continuous fluid flow like pickling, plating etc.,\nIdeally suited for ETP Application\nLimitations of Vertical Glandness Pump\nCan operate only wherever negative suction exists or can be created\nThe suction lift poses a limitation in the installation ( where NPSH available is less than 3 meters)\nCan be suitable for only those liquids where priming is feasible\nNot recommended for high temperature application\nNot recommended for inflammable organic liquids\nNot recommended for acids like strong sulphuric acid or oleium where priming is not feasible",
        "Capacity_Range": "1 m3/hr to\n550m3/hr",
        "Head_Upto": "60m",
        "Impeller_type": "Closed\nSemi open",
        "Offered_with": "2900 rpm\n1440 rpm",
        "Designed_as_Per": [
            "Manufacturer's Standard"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/vertical_glandless_pump.pdf"
    },
    {
        "Products_Url":"Vertical-Glandless-Pumps",
        "Type_Url": "Non-Metallic",
        "Products": "Vertical Glandless Pumps",
        "Type": "Non-Metallic",
        "imageUrl": "/assets/img/non-metalic-vertical-gp.jpg",
        "Materials_of_Construction": [
            "Ultra-High Molecular Weight Poly Ethylene (UHMWPE)",
            "Poly Vinylidene Di-Fluoride (PVDF)"
        ],
        "Description": "The beauty of a centrifugal pump was introduced of the world in the form of horizontal pumps, in the industrial spectra with a back pull-out design. These horizontal centrifugal pumps come with their own limitations/ problems.\nWe redefined the view of a centrifugal pump with gland free pumping-vertical glandless pump. A unique design with and zero safe minimum flow and no problems of alignment.\n\nThe Vertical Glandless Pumps in normal hydraulic terms do not differ from any conventional centrifugal pump. The pump is designed in such a way that the liquid would normally try to pass through annular space , where the impeller drive shaft enters the back plate (stuffing box).This liquid is diverted and returns as a controlled flow to the suction tank. The need for any seal is eliminated by allowing the leakage liquid to escape through the overflow connection to the overflow chamber.\nThe liquid entering the suction flows around the impeller casing and leaves through the delivery under pressure. Between the annular gap of the upper rotor casing and impeller some leakage liquid escapes to the overflow chamber. The auxiliary impeller (Expeller) prevents the leakage liquid going further up and channelizes it through outlet in the overflow chamber.\nThese pumps are ideally suited for continuous operation for clear liquid and slurries. This pump is at its best with negative suction.\n\nUniqueness of Vertical Glandless Pumps\nDesigned for continuous operation\nProblems associated with mechanical seal or gland is eliminated\nNo bearing housing\nSelf draining\nSuitable for clear liquids and slurries\nZero safe minimum flow\nCan operate pump safely form fully open to fully closed condition\nPump can run dry indefinitely\nSaves valuable floor space\nWhen to Choose a Vertical Glandless Pump ?\nWhere ever negative suction exist (pump is mounted above the level of the suction tank).\nHeight of the suction tank is less than 5 meters\nPriming of the pump is feasible\nIdeally suited for water based inorganic chemicals like acids, alkalis, salt solutions and its slurries\nContinuous operation like scrubbing\nRecirculation or continuous fluid flow like pickling, plating etc.,\nIdeally suited for ETP Application\nLimitations of Vertical Glandness Pump\nCan operate only wherever negative suction exists or can be created\nThe suction lift poses a limitation in the installation ( where NPSH available is less than 3 meters)\nCan be suitable for only those liquids where priming is feasible\nNot recommended for high temperature application\nNot recommended for inflammable organic liquids\nNot recommended for acids like strong sulphuric acid or oleium where priming is not feasible",
        "Capacity_Range": "1 m3/hr to\n450m3/hr",
        "Head_Upto": "55m",
        "Impeller_type": "Semi open",
        "Offered_with": "2900 rpm\n1440 rpm",
        "Designed_as_Per": [
            "Manufacturer's Standard"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/vertical_glandless_pump.pdf"
    },
    {
        "Products_Url":"Vertical-Cantilever-Shaft-Pumps",
        "Type_Url": "Metallic",
        "Products": "Vertical Cantilever Shaft Pumps",
        "Type": "Metallic",
        "imageUrl": "/assets/img/metalic-vertical-csp.jpg",
        "Materials_of_Construction": [
            "Casted Pumps:",
            "Stainless steels to various ASTM Specification",
            "Alloy-20",
            "Hastelloy B, C",
            "CD 4MCu",
            "Inconel Alloy",
            "Nickel (CZ 100)",
            "Ni resist",
            "Acid resisting bronzes",
            "",
            "Fabricated:",
            "Titanium"
        ],
        "Description": "Rugged and reliable solution to handle liquids from a pit or a tank\nThis design eliminates the requirement for a bush bearing, associated hydraulic flushing / cushioning. Bearings are situated above the mounting plate and the shaft designed on a cantilever principle to ensure a deflection at the impeller end being less than 50 micron\nThese pumps have been designed for operating at elevated temperatures of upto 800oC with suitable material of construction for critical applications.\n\nCantilever Shaft Pump finds its application wherever high reliability, low maintenance are demanded. Cantilever Shaft Pump differs substantially from the regular Sump Pump.\nTo offer solutions to the difficult applications to the customers is indeed a professional challenge to us irrespective of the numbers involved. We have developed, manufactured and supplied pumps to customers including Department of Atomic Energy, Government of India.\nA Cantilever Shaft Pump has bearings to support, and an overhung shaft that extends to the sump or tank. These bearings are mounted outside the liquid level so that they are never expressed to the pumping fluid.\nAs there are no submerged bearings, the pump can handle slurries, clear liquids and high temperature liquids without any need for flushing or sealing.\nThe pump can run dry without any bad effects or damage.\nThe Vertical Cantilever Shaft Pump requires no seals or packing when used in the open sump.\nWhen used in the closed tank with hazardous liquids packing is used to prevent the fumes coming out.\nThe Vertical Cantilever Shaft Pump is designed to operate much below the critical speed as the sump depth increases the shaft diameter also increases. We guarantee the maximum deflection at the impeller side is less than 50 microns.\nWe prefer to operate the Vertical Cantilever Shaft Pump at 1440 RPM with the maximum depth of 1m. The tanks of higher depth can be emptied by having a tail pipe attached to the suction port.\nThese pumps can be used wherever automatic switching ON/OFF is required.",
        "Capacity_Range": "3 m3/hr to\n450m3/hr",
        "Head_Upto": "45m",
        "Impeller_type": "Closed\nSemi open",
        "Offered_with": "1440 rpm",
        "Designed_as_Per": [
            "ISO 2858",
            "ANSI B 73.1",
            "IS 5199"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "offered to comply VS5 as per API 610\ndesigned for temperature of 8000 C with suitable MOC",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/vertical_cantilever_shaft_pump.pdf"
    },
    {
        "Products_Url":"Vertical-Cantilever-Shaft-Pumps",
        "Type_Url": "Non-Metallic",
        "Products": "Vertical Cantilever Shaft Pumps",
        "Type": "Non-Metallic",
        "imageUrl": "/assets/img/non-metalic-vertical-csp.jpg",
        "Materials_of_Construction": [
            "Ultra-High Molecular Weight Poly Ethylene (UHMWPE)",
            "Poly Vinylidene Di-Fluoride (PVDF)"
        ],
        "Description": "Rugged and reliable solution to handle liquids from a pit or a tank\nThis design eliminates the requirement for a bush bearing, associated hydraulic flushing / cushioning. Bearings are situated above the mounting plate and the shaft designed on a cantilever principle to ensure a deflection at the impeller end being less than 50 micron\nThese pumps have been designed for operating at elevated temperatures of upto 800oC with suitable material of construction for critical applications.\n\nCantilever Shaft Pump finds its application wherever high reliability, low maintenance are demanded. Cantilever Shaft Pump differs substantially from the regular Sump Pump.\nTo offer solutions to the difficult applications to the customers is indeed a professional challenge to us irrespective of the numbers involved. We have developed, manufactured and supplied pumps to customers including Department of Atomic Energy, Government of India.\nA Cantilever Shaft Pump has bearings to support, and an overhung shaft that extends to the sump or tank. These bearings are mounted outside the liquid level so that they are never expressed to the pumping fluid.\nAs there are no submerged bearings, the pump can handle slurries, clear liquids and high temperature liquids without any need for flushing or sealing.\nThe pump can run dry without any bad effects or damage.\nThe Vertical Cantilever Shaft Pump requires no seals or packing when used in the open sump.\nWhen used in the closed tank with hazardous liquids packing is used to prevent the fumes coming out.\nThe Vertical Cantilever Shaft Pump is designed to operate much below the critical speed as the sump depth increases the shaft diameter also increases. We guarantee the maximum deflection at the impeller side is less than 50 microns.\nWe prefer to operate the Vertical Cantilever Shaft Pump at 1440 RPM with the maximum depth of 1m. The tanks of higher depth can be emptied by having a tail pipe attached to the suction port.\nThese pumps can be used wherever automatic switching ON/OFF is required.",
        "Capacity_Range": "3 m3/hr to\n450m3/hr",
        "Head_Upto": "45m",
        "Impeller_type": "Closed\nSemi open",
        "Offered_with": "1440 rpm",
        "Designed_as_Per": [
            "ISO 2858",
            "ANSI B 73.1",
            "IS 5199"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "offered to comply VS5 as per API 610\ndesigned for temperature of 8000 C with suitable MOC",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/vertical_cantilever_shaft_pump.pdf"
    },
    {
        "Products_Url":"VERTICAL-SUMP-PUMPS",
        "Type_Url": "Metallic",
        "Products": "VERTICAL SUMP PUMPS",
        "Type": "Metallic",
        "imageUrl": "/assets/img/metalic-vertical-sump-pump.jpg",
        "Materials_of_Construction": [
            "Casted Pumps:",
            "Stainless steels to various ASTM Specification",
            "Alloy-20",
            "Hastelloy B, C",
            "CD 4MCu",
            "Inconel Alloy",
            "Nickel (CZ 100)",
            "Ni resist",
            "Acid resisting bronzes",
            "",
            "Fabricated:",
            "Titanium"
        ],
        "Description": "A reliable solution for handling low vapor pressure liquids, concentrated acid or for deep pumping solution.\nA single extended shaft for smooth power transmission and suitable intermediate bushing to handle deep pumping of up to 6m.\nThis solution can be utilized for automatic on and off with no spillage or leak during operation\nWe can offer the pump with material and metallurgy to suit the liquid handled.",
        "Capacity_Range": "3 m3/hr to 450 m3/hr",
        "Head_Upto": "120m",
        "Impeller_type": "Semi open / Closed",
        "Offered_with": "1400 rpm and\n2900 rpm",
        "Designed_as_Per": [
            "VS4 specification as per API 610"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "Designed for temperature of 800°C with suitable MOC",
        "Applications": [
            "Nuclear Industries",
            "Petrol Industry",
            "Fertilizer and Soil Industry",
            "Metallurgical Industries",
            "Metal Finishing and Surface Coating",
            "Steel Industry",
            "Heavy Chemical and Caustic Industries",
            "Water Treatment",
            "Pharmacetical Industry",
            "Pollution Control Equipment",
            "Food and Beverages",
            "Paper and Rayon Industry"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/pdf/vertical_sump_pump.pdf"
    },
    {
        "Products_Url":"VERTICAL-INLINE-PUMPS",
        "Type_Url": "Metallic",
        "Products": "VERTICAL INLINE PUMPS",
        "Type": "Metallic",
        "imageUrl": "/assets/img/metalic-vertical-inline-pump.jpg",
        "Materials_of_Construction": [
            "Casted Pumps:",
            "Stainless steels to various ASTM Specification",
            "Alloy-20",
            "Hastelloy B, C",
            "CD 4MCu",
            "Inconel Alloy",
            "Nickel (CZ 100)",
            "Ni resist",
            "Acid resisting bronzes",
            "",
            "Fabricated:",
            "Titanium"
        ],
        "Description": "The vertical inline pump is similar to centrifugal pump in operation. The uniqueness is the suction and delivery of this pump lies in same axis. They are utilized to maintain a constant pressure and flow in the pipeline\nThe design ensures low axial load and enhances operational cost and saves valuable floor space. These pumps are suitable only for clear liquids.\n\nFeatures\nStainless steel impellers, shaft and stage casings (SS 304/SS 316)\nAll single phase motors are fitted with thermal motor protector\nStrengthened cartridge seals\nEnhanced hydraulic efficiency\nGood compatibility and environment friendly\nLow noise level and low vibration level",
        "Capacity_Range": "1.5 m3/hr to\n450m3/hr",
        "Head_Upto": "300m",
        "Impeller_type": "Closed\nSemi open\nReverse vane",
        "Offered_with": "mechanical seal or gland packing",
        "Designed_as_Per": [
            "ISO 2858",
            "ANSI B 73.1",
            "IS 5199"
        ],
        "Tested_in_Compliance_with": [
            "IS 5120",
            "ISO 9906",
            "API 610",
            "HIS"
        ],
        "Specialty_in": "Pump confirm to OH3 and OH4 as per API 610",
        "Applications": [
            "Industrial and domestic pressure boosting",
            "Boiler feed",
            "Reverse osmosis (RO)",
            "DM plant",
            "Hot & cold water and coolant circulation",
            "Industrial washing",
            "Fire fighting systems",
            "Water supply in buildings and irrigation"
        ],
        "Catelogue_Reference": "https://www.process-pumps.com/inline_metallic.html#\n\nhttps://www.crigroups.com/wp-content/uploads/2021/03/4-VERTICAL-MULTISTAGE-PUMPS-1.pdf"
    },
    {
        "Products_Url":"Vertical-Multistage-Inline-Pumps",
        "Type_Url": "MV-Series",
        "Products": "Vertical Multistage Inline Pumps",
        "Type": " MV Series\t",
        "imageUrl": "/assets/img/mv-series-booster-pumps.webp",
        "Materials_of_Construction": [
            "SS 304",
            "SS 316"
        ],
        "Description": "Vertical Multistage Inline pumps are the products of expertise gained from over four decades of experience, endurance and workmanship. Products are engineered to perfection with almost care and stringent quality control at all stages to ensure a trouble-free service.",
        "Features": [
            "Stainless steel impellers, shaft and stage casings (SS 304/SS 316)\n",
            "All single phase motors are fitted with thermal motor protector\n",
            "Strengthened cartridge seals\n",
            "Enhanced hydraulic efficiency\n",
            "Good compatibility and environment friendly\n",
            "Low noise level and low vibration level"
        ],
        "Capacity_Range": "1.5 m3/hr to\n450m3/hr",
        "Head_Upto": "300m",
        "Power_Rating": "Up to 110 kW",
        "Offered_with": "mechanical seal",
        "Liquid_temperature": [
            "-15°C to +120°C"
        ],
        "Applications": [
            "Industrial and domestic pressure boosting",
            "Boiler feed",
            "Reverse osmosis (RO)",
            "DM plant",
            "Hot & cold water and coolant circulation",
            "Industrial washing",
            "Fire fighting systems",
            "Water supply in buildings and irrigation"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/03/4-VERTICAL-MULTISTAGE-PUMPS-1.pdf"
    },
    {
        "Products_Url":"Pressure-Booster-System",
        "Type_Url": "Isobaric-Series",
        "Products": "Pressure Booster System",
        "Type": "Isobaric Series",
        "imageUrl": "/assets/img/isobaric.jpg",
        "Materials_of_Construction": [
            "Galvanized iron ",
            "Stainless Steel"
        ],
        "Description": "Pressure Booster system has a complete combo package for water pressure boosting and it is precisely designed for hassle free performance.\n\nMSTS / MHTS Series are pumps are non-self priming, multistage centrifugal pumps with mechanical seal and shaft extended to the motor (Single Shaft) \n\nFeatures\nAutomatic cascade control of pumps by means of one/ two pressure switch(es).\nAutomatic change-over at any start/ stop cycle.\nEmergency push button in case of series faults\nStart & stop delays to prevent simultaneous starting I stopping of the 2 pumps.\nDry running protection by means of current sensing program.\nAutomatic circuit breaker protecting the motor against short circuit and overload.\nThe complete system mounted on a single rigid base and factory tested,ensures the reliability of the system",
        "Capacity_Range": "Upto 80m3/Hr",
        "Head_Upto": "",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Residential Buildings",
            "Industries",
            "Sprinkler irrigation systems"
        ],
        "Catelogue_Reference": "https://crigroups.com/wp-content/uploads/2021/07/Isobaric-Series-Catalogue.pdf"
    },
    {
        "Products_Url":"Pressure-Booster-System",
        "Type_Url": "MV-Series",
        "Products": "Pressure Booster System",
        "Type": "MV Series",
        "imageUrl": "/assets/img/mvseries-pbs.jpg",
        "Materials_of_Construction": [
            ""
        ],
        "Description": "Vertical Multistage lnline pumps are products of expertise gained from over four decades of experience. endurance and workmanship.  Products are engineered to perfection with utmost care and stringent quality control at all stages to ensure a trouble-free service.\n\nFeatures\nStainless steel impellers,shaft and stage casings (SS / 304/ SS 316)\nAll single phase motors are fitted with thermal motors protector\nStrengthened cartridge seals\nEnhanced hydraulic efficiency\nGood compatibility and environment friendly\nLow noise level and low vibration level",
        "Capacity_Range": "upto 200 m3/hr",
        "Head_Upto": "300 m",
        "Impeller_type": "",
        "Offered_with": "Mechanical Seal",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Residential Buildings",
            "Industries",
            "Sprinkler irrigation systems"
        ],
        "Catelogue_Reference": "https://crigroups.com/wp-content/uploads/2021/07/MV-Series-Catalogue.pdf"
    },
    {
        "Products_Url":"Pressure-Booster-System",
        "Type_Url": "MVHS-Series",
        "Products": "Pressure Booster System",
        "Type": "MVHS Series",
        "imageUrl": "/assets/img/mvhsseries-pbs.jpg",
        "Materials_of_Construction": [
            ""
        ],
        "Description": "Hydro Pneumatic System are suitable for all kinds waters . The Products of the expertise gained from over five decades of experience, endurance and workmanship . These products are experienced to perfection with utmost care and stringent quality control at all stages to ensure a trouble free service .\n\nFeatures:\nVertical multistage pump maximize performance, demonstrates high degree of consistency and is economical\nPumps with VFD lasts longer as they can adjust the work load to meet the system requirement\nExtremely quiet and low vibration when in operation. The smooth, automated start and stop, reduces water hammer\nIt avoids water pollution caused by roof tanks\nIt also serves as the best replacement for the traditional roof tank water supply way, which is a source of water pollution",
        "Capacity_Range": "upto 450m3/h, upto 125lps",
        "Head_Upto": "160 m",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Commercial Buildings",
            "Industries"
        ],
        "Catelogue_Reference": "https://crigroups.com/wp-content/uploads/2021/07/MVHS-Series.pdf"
    },
    {
        "Products_Url":"Horizontal-Multistage-Pumps",
        "Type_Url": "MH-Series",
        "Products": "Horizontal Multistage Pumps",
        "Type": "MH Series",
        "imageUrl": "/assets/img/mhseries-hmp.jpg",
        "Materials_of_Construction": [
            ""
        ],
        "Description": "MH Series pumps are non ° self priming, multistage centrifugal pumps with mechanical seal and shaft extended to the motor (Single Shaft)",
        "Capacity_Range": "Upto 12 m°/hr",
        "Head_Upto": "Upto 110 m",
        "Impeller_type": "",
        "Offered_with": "\tCarbon / Mechanical Seal",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Boosting Systems in High rise buildings, hotels, Industries, etc.,",
            "Industrial Washing Systems & High-pressure cleaning",
            "Boiler Feed",
            "Modern Irrigation such as Sprinkler; Drip feeds, etc.,"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/03/Building-Services-6.pdf"
    },
    {
        "Products_Url":"Submersible-Sewage-Pumps",
        "Type_Url": "i-Tech-Series",
        "Products": "Submersible Sewage Pumps",
        "Type": "i-Tech Series\t",
        "imageUrl": "/assets/img/itech-ssp.jpg",
        "Materials_of_Construction": [
            "Cast Iron FG260 WITH 0.3 CU 0.3 NI 0.3MO MIN"
        ],
        "Description": "With an eye on the growing market for various types of pumps for different industrial applications,  developed a wide range of rugged, reliable and efficient pumps for different applications.\n\nThe range is continuously growing with additions to the product portfolio at regular intervals. Industrial pumps from find applications not only in handling water but different types of fluids in paper, process and pulp industries, paint, dyes and chemical industries, mining and metal manufacturing industries, food & beverage industries, textile industries, power industry, machine tool industry apart from general water supply. All the products can be customized to suit specific application and requirement and is backed by a dedicated State-of-the-Art Greenfield factory. All pumps are tested in a highly sophisticated PLC-SCADA based Test Bed complying with international standards.\n\nFeatures\nHigh head\nHi hydraulic efficiency\nMinimized risk of clogging & minimum wear\nWide free passage in single / multi channel impeller\nDouble mechanical seal\nBronze wear ring to maintain performance\nH07RNF cables\nAlloyed cast iron to increase resistance to wear",
        "Capacity_Range": "Upto 1800 m3/hr",
        "Head_Upto": "65m",
        "Impeller_type": "Vortex; Cutter; Single/Multi channel; Semi Open",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Pumping of waste from houses",
            "Commercial buildings",
            "Industrial Waste wate",
            "Mines pumping sewage water from stock farm"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/03/All-products-updated-curve.pdf"
    },
    {
        "Products_Url":"Surface-Water-Pumps",
        "Type_Url": "SMB-SP-Series",
        "Products": "Surface Water Pumps",
        "Type": "SMB/SP Series",
        "imageUrl": "/assets/img/smbsp-swp.jpg",
        "Materials_of_Construction": [
            ""
        ],
        "Description": "surface waste water pumps work efficiently whether in waste water treatment, waste water disposal or flood control. They are built with high efficiency motors. The waste water pumps are equipped with heavy duty sealed bearings and an inbuilt seal that prevents ingress of silt and sand.",
        "Capacity_Range": "Upto 270 m3/hr",
        "Head_Upto": "34m",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Pumping of domestic sewage",
            "Industrial waste water",
            "Water from marine",
            "Dewatering from Construction",
            "Mines pumping sewage water from stock farm"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2022/07/SMB-Series-Flyer.pdf"
    },
    {
        "Products_Url":"Industrial-Monoblock",
        "Type_Url": "BP-CT-Series",
        "Products": "Industrial Monoblock",
        "Type": "BP/CT Series",
        "imageUrl": "/assets/img/bpct-im.jpg",
        "Materials_of_Construction": [
            "Cast Iron"
        ],
        "Description": "Centrifugal Monoblock Pump sets are powered by totally enclosed fan cooled AC induction two pole motor. Motor stator is made to low watt less silicon steel laminations assembled under pressure and locked in the frame. The windings are of high-grade enamelled copper wire offer excellent resistance and are varnish impregnated. Construction of motor frame and usage of quality materials result in high performance and low temperature rise thereby increasing the life cycle of the motor.\n\nFeatures:\nHigh operating efficiency resulting in lower power consumption\nGood suction lift characteristics\nInbuilt thermal overload protector in all single phase pump sets upto 2 HP\nSpecially designed for wide voltage operation\nDynamically balanced rotating parts ensures minimum vibrations and long life\nBack pull-out design for easy servicing & repair\nDouble shield ball bearings, so no need of external lubrication",
        "Capacity_Range": "",
        "Head_Upto": "",
        "Impeller_type": "",
        "Offered_with": "Carbon & Ceramic Mechanical Seal",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Pumping of waste from houses",
            "Commercial buildings",
            "Industrial waste water",
            "Mines pumping sewage water from stock farm",
            "Drinking water supply"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/03/All-products-updated-curve.pdf"
    },
    {
        "Products_Url":"End-Suction-Pumps",
        "Type_Url": "ECW-Series",
        "Products": "End Suction Pumps",
        "Type": "ECW Series",
        "imageUrl": "/assets/img/ecws-esp.jpg",
        "Materials_of_Construction": [
            "CI, Bronze, SS"
        ],
        "Description": "Suction Pump:\nEnd Suction Pumps are centrifugal pumps that are typically designed horizontally and as single-stage pumps. End Suction Pumps are cost-effective and reliable. They are widely used in applications such as HVAC, irrigation, and in applications including industries such as food, sugar, paper, chemical, cement, and construction.\n\nEnd Suction Pump Range ° ECW Series:\nECW Back Pull-out End Suction Pumps are of the single-stage with back pull out type. The impellers are of enclosed sort and are balanced statically and dynamically. The casing has axial suction and top centerline delivery and smooth hydraulic passages ensure high efficiency. These pumps are easy-to-maintain, reliable, and long-lasting. \n\nFeatures\nOptimized hydraulics design\nCommon housing for gland packing & mechanical seal versions\nEngineered bearing frame\nEjecting bolts provision\nReplaceable wear rings\nContoured lock nut* with double flat and helical groove option",
        "Capacity_Range": "Upto 550 m3/Hr",
        "Head_Upto": " 100m",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Water supply",
            "Heating & air conditioning system",
            "Swimming pools. fountains",
            "Food | sugar | paper | pulp | chemical | cement industries",
            "Construction industries",
            "Power plant",
            "Irrigation",
            "Pressure boosting"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/08/Fire-Fighting-Pumps.pdf"
    },
    {
        "Products_Url":"Horizontal-Split-Case-Pumps",
        "Type_Url": "SCW-Series",
        "Products": "Horizontal Split Case Pumps\t",
        "Type": "SCW Series",
        "imageUrl": "/assets/img/scws-hscp.jpg",
        "Materials_of_Construction": [
            "CI, Bronze"
        ],
        "Description": "Split Case Pumps are Engineered with °closed° (double shrouded) impellers with Francis type vane design to deliver extraordinary pump efficiency. These Horizontal Split Case pumps are designed with, single stage, double suction or single suction pumps with horizontal shaft and detachable stuffing box.\n\nFeatures\nAir release valve\nTop pull out casing design and separate bearing housing\nReplaceable wear rings at both sides of impeller\nDynamically balanced double suction low NPSH impeller\nCommon housing for gland packaging / mechanical seal option\nOptions for single and double volute\nModule design for maximum interchangeability of rotating units",
        "Capacity_Range": "2500 m3/h",
        "Head_Upto": "170m",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Water supply",
            "HVAC systems",
            "Mines | refiners",
            "Marine | power plant",
            "Irrigation",
            "Steel plant"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/08/Fire-Fighting-Pumps.pdf"
    },
    {
        "Products_Url":"Close-Couple-Pumps",
        "Type_Url": "CCW-Series",
        "Products": "Close Couple Pumps",
        "Type": "CCW Series",
        "imageUrl": "/assets/img/ccws-ccp.jpg",
        "Materials_of_Construction": [
            "CI, Bronze, SS"
        ],
        "Description": "With an eye on the growing market for various types of pumps for different industrial applications, CRI has developed a wide range of rugged, reliable and efficient pumps for different applications.\n\nCCW series ° reliable and high quality, single stage, end suction, centrifugal, flange / foot mounted, close coupled pump designed as per manufacturer standard to pump clear liquids.\n\nFeatures\nConical housing with wear ring\nBack pull out design\nStub shaft design minimizes deflection\nNo need for coupling alignment\nOptimized hydraulics design\nContoured lock nut with double flat and helical groove option\nCompact, easy and quick installation",
        "Capacity_Range": "Upto 550 m3/Hr",
        "Head_Upto": "100m",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Water supply",
            "HVAC systems",
            "Swimming pools, fountains",
            "Food | sugar | paper | pulp | chemical | cement industries",
            "Construction industries",
            "Power plant | steel | water supply | irrigation",
            "Pressure boosting"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/03/All-products-updated-curve.pdf"
    },
    {
        "Products_Url":"Vertical-Turbine",
        "Type_Url": "VTP-Series",
        "Products": "Vertical Turbine",
        "Type": "VTP Series",
        "imageUrl": "/assets/img/vtps-vt.jpg",
        "Materials_of_Construction": [
            "CI",
            "Bronze Steel",
            "Stainless Steel"
        ],
        "Description": "WHAT IS A VERTICAL TURBINE PUMP?\nVertical turbine pumps are mixed flow or a vertical axis centrifugal pump which include stages of rotating impellers & stationary bowls to process the guide vanes. Vertical pumps are utilized wherever the level of water pumping is under the volute centrifugal pump limits.\n\nWORKING PRINCIPLE OF VERTICAL TURBINE PUMPS\nWater enters the vertical turbine pump through a bell-shaped port known as the suction bell. Once there, the water is accelerated by the first impeller, which is powered by a long shaft extending from the surface. Once the water is accelerated, it moves into the diffuser bowl directly above the impeller.\n\nWhen the water enters the diffuser bowl, it is converted from a state of high velocity into high pressure. If it is a multistage pump, the water is fed into the next impeller. The process then repeats through all of the impellers in the pump.\n\nAfter the last impeller and diffuser bowl, the water passes through the wellbore and heads towards the surface. The spinning shaft that is being driven from the surface is designed to be supported by bushings at regular intervals, and the fluid acts as a lubricant as it moves past the bushing assemblies.\n\nAt the surface, the fluid flows through the discharge head, which is designed to allow the fluid to change direction. Once it is past the discharge head, the pumped fluid is distributed as needed through pipes.\n\nVertical turbine pumps are operated by an electric or diesel motor sitting on the surface. The motor powers the downward traveling shaft through a right angle drive. This right-angle drive sits above the discharge head.\n\nUses of Verticle Turbine Pumps\nVertical turbine pumps have a small footprint, and there are no priming issues (as long as minimum submergence requirements are met) due to the impellers being submerged in fluid. They are easily customized, and are highly efficient on high head, low flow applications.\n\nApplications of Vertical Turbine Pumps\nVertical turbine pumps are popular and versatile for many different applications and are not limited to underground operations.Transporting water from deep wells to the surface is the primary application of these pumps.Irrigation applications often use vertical turbine pumps to supply water to agriculture.These pumps transport water to treatment plants, irrigation sprinklers and to taps in homes.\n\nFeatures\nGrease lubricated & heavy duty bearing\nWater deflector\nStuffing box with packing / mechanical seal\nFabricated / casted discharge head\nAbove surface & below surface option\nFlanged end fabricated column pipes\nMuff/screw coupling options\nBearing holder for shaft support & alignment\nCutless rubber/bronze bearing with self & oil lubricated system\nCone pipe to facilitate smooth flow",
        "Capacity_Range": "Upto 30,000 m3/Hr",
        "Head_Upto": "150 m",
        "Impeller_type": "",
        "Offered_with": "",
        "Specialty_in": "",
        "Applications": [
            "Water supply",
            "HVAC systems",
            "Mines | refiners",
            "Marine",
            "Power plant | water supply",
            "Irrigation",
            "Steel plant",
            "Cement & process"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/03/All-products-updated-curve.pdf"
    },
    {
        "Products_Url":"Vertical-Sump",
        "Type_Url": "ECV-Series",
        "Products": "Vertical Sump",
        "Type": "ECV Series",
        "imageUrl": "/assets/img/ecvs-vs.jpg",
        "Materials_of_Construction": [
            ""
        ],
        "Description": "enriched by the hybrid arrangement of using the available impeller and casing design elements.\n\nVS ° Series Rugged and Reliable line shaft design sump pumps for wet sump applications. Used in many industrial process applications, including industrial sump washes and tank unloading involving corrosive and non-corrosive liquid chemicals.\n\n12+ wholly-owned subsidiaries spread across all continents with manufacturing/assembly and technical service capabilities, to ensure timely delivery and service.",
        "Capacity_Range": "",
        "Head_Upto": "",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "General industry",
            "Sugar industries",
            "Corrosive & Non corrosive effluents"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/09/SUMP_Flyer_Industrial_Final-ECV.pdf"
    },
    {
        "Products_Url":"Centrifugal-Monoblock-Pumps",
        "Type_Url": "ACM-Virat-Series",
        "Products": "Centrifugal Monoblock Pumps",
        "Type": "ACM/Virat Series",
        "imageUrl": "/assets/img/acm-cmp.jpg",
        "Materials_of_Construction": [
            "\tCast Iron "
        ],
        "Description": "Monoblock Pump:\nCentrifugal Monoblock pump sets are powered by a totally enclosed fan-cooled AC induction two pole motor. The motor stator is made of low-watt loss silicon steel laminations assembled under pressure and rigidly locked in the frame. Construction of motor frame and usage of quality materials result in high performance and low-temperature rise thereby increasing the life cycle of the motor.\n\nIn a monoblock pump, the main mover of the pump and motor are assembled jointly within a shelter. This design includes a mechanical device where a general shaft includes the revolving parts. The pump and the motor are connected without using any coupling device.\n\nBasics of a Monoblock Pump:\nA monoblock pump is constructed to avoid the transmission loss that occurs within the coupling-driven set as well as belt-driven set. While transmitting energy from the motor to the shaft there is no loss of energy in a monoblock pump. Monoblock pumps are installed close to reservoirs. The Monoblock water pumps are compact and simple. They are self-supporting and do not require extra base plates. They are cost-effective.\n\nFeatures\nHigh operating efficiency resulting in lower power consumption\nGood suction lift characteristics\nInbuilt thermal over load protector in all single-phase pumpsets upto 1.5HP\nSpecially designed for wide voltage operation\nDynamically balanced rotating parts including rotor and impeller ensures minimum vibration and longer life\nBack pull-out design for easy servicing & repair",
        "Capacity_Range": "",
        "Head_Upto": "",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Domestic",
            "Irrigation",
            "Farms",
            "Gardens",
            "Industry",
            "Civil Applications"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/05/Centrifugal%20Monoblock%20Pumps%20-%20ACM.pdf"
    },
    {
        "Products_Url":"Centrifugal-Monoblock-Pumps",
        "Type_Url": "Jumbo-Series",
        "Products": "Centrifugal Monoblock Pumps",
        "Type": "Jumbo Series",
        "imageUrl": "/assets/img/js-cmp.jpg",
        "Materials_of_Construction": [
            "\tCast Iron "
        ],
        "Description": "Centrifugal pumps are one of the most innovative solutions for agricultural irrigation. They are best suited for continuous operation wherein a non-stop flow of water is required. Centrifugal pumps are widely used since they are highly efficient, easy to operate and maintain and have a wide range of capacities.\n\nCentrifugal pumps from C.R.I are powered by a totally enclosed fan cooled AC induction two poles and a four-pole motor. This enables continuous operation. The efficient construction of the motor frame and the usage of quality materials results in high performance. The high-quality mechanical seal lowers the temperature rise. The robust construction supports the life cycle of the motor.\n\nBasics of Centrifugal Pump:\nAn impeller is the prime component of a centrifugal pump. Using centrifugal force and rotational energy, the impeller moves water entering the inlet or suction through the outlet. The water coming out of a centrifugal pump is of high force.\n\nFeatures\nRobust construction ensures longer life\n3D Heat Transfer technology ensures low temperature rise\nDynamically balanced rotating parts to ensures minimum vibration & long life\nHigh operating efficiency resulting in lower power consumption\nSpecially designed for wide voltage operation\nGood suction lift characteristics",
        "Capacity_Range": "33 lps (118.8 m3/hr)",
        "Head_Upto": "",
        "Impeller_type": "",
        "Offered_with": "",
        "Designed_as_Per": [
            ""
        ],
        "Tested_in_Compliance_with": [
            ""
        ],
        "Specialty_in": "",
        "Applications": [
            "Irrigation & Agriculture",
            "Farms",
            "Garden",
            "Industrial",
            "Domestic",
            "Sprinkler & Drip Irrigation"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/09/Centrifugal-Monoblock-Jumbo-Series.pdf"
    },
    {
        "Products_Url":"Well-Point-De-Watering-Pumps",
        "Type_Url": "WD-Series",
        "Products": "Well Point De-Watering Pumps",
        "Type": "WD Series",
        "imageUrl": "/assets/img/wds-wpdp.jpg",
        "Materials_of_Construction": [
            "Cast Iron",
            "Bronze Steel",
            "Stainless Steel"
        ],
        "Description": "WD series skid mounted wellpoint and general-purpose dewatering pumps are designed to handle raw water, muddy water, sewage and liquid with semi solids. The state of the art manufacturing facility and quality process ensure trouble free products for long life. These pumps are equipped with vacuum pump and priming tank for automatic self-priming and re-priming action. The fuel tank is designed to give uninterrupted fuel supply for 24 hours operation. These pumps are offered with off high way four-wheel solid rubber tyres. The custom-made double mechanical seal in pump provides perfect sealing and leak free operation .The oil bath type stuffing box ensure the durability of mechanical seal and dry run during initial start-up.",
        "Capacity_Range": "500 M3/HR",
        "Head_Upto": "35M",
        "Impeller_type": "",
        "Offered_with": "",
        "Specialty_in": "",
        "Applications": [
            "Municipal / Utility",
            "Marine",
            "Mining",
            "Dewatering",
            "Civil Construction"
        ],
        "Catelogue_Reference": "https://www.crigroups.com/wp-content/uploads/2021/09/WD-Flyer.pdf"
    }
]
  constructor() { }
}
