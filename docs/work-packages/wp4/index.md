---
title: "WP4 - Multicriteria framework for mangrove restoration and conservation"
date: 2024-07-18
---

# Work Package 4
## Multicriteria framework for mangrove restoration and conservation

:::note Lead: SUA & UCC; Colead: NIBIO; 
Other partners: Community Organizations in Tanzania & Ghana  
:::

### Background

Coastal mangrove ecosystem managers, local and regional decision makers need frameworks to prioritize areas that optimize restoration and conservation objectives. The success of mangrove restoration and conservation requires identifying suitable restoration sites and key habitat conditions. Studies in coastal Tanzania and Ghana have thus far focused mainly on descriptive approaches and spatial mapping<sup><a href="#ref1">1</a>, <a href="#ref2">2</a></sup>. It is thus important to predict mangrove distribution and potentially suitable habitats for selected mangrove species using advanced ecological modelling which serves as the basis for ecological restoration and thereby mitigate the impacts of climate change and provide economic benefits to society.

### Objective

To co-develop multicriteria framework for identifying and quantifying restoration areas and conservation successes in coastal Mangrove ecosystems of Tanzania and Ghana.

### Outcome

A novel multicriteria (i.e., multi-models based) framework adopted by decision makers for mangrove restoration and conservation.

### Outputs

**Output 4.1:** Potential/priority restoration and conservation areas mapped, and key success indicators identified, quantified and characterized.  
**Output 4.2:** Multicriteria framework made available. This is an objective tool (models based multicriteria framework) for prioritizing sites and guide for restoration and conservation of mangroves. This includes pinpointing anthropogenic and climate-related disturbances that also threaten blue-carbon storage and sink capacity and thereby mitigation strategy. The tool also helps to understand socioecological requirements of mangrove restoration and conservation in different multiple-use landscapes and under the influence of climate change management practices. The resulting multicriteria framework will be an input to the decision support tool ([DSS](http://www.coastmanafrica.org/dss/)) (WP5).

### Research methodology and design

**Research site, data and data sources:** The coastal mangrove ecosystems map product of Tanzania and Ghana developed by WP1 will provide the base map for sampling. Stratified random sample plots will be laid out across the mangrove ecosystem map. Four different groups of data will be extracted.

1. Data on biophysical/geographic characteristics: slope, elevation, bathymetry and hydrology will come from national and global data sets and models.
2. data on land cover, vegetation and carbon will be generated from the map products of WP1, and Map data from NIBIO’s completed project National Carbon Monitoring (NCMC) of Tanzania.
3. Bioclimatic variables from AFRICLIM (8-10 variables of particular relevance to mangrove ecosystems).
4. Data on infrastructures, population centres, management practices, etc. will be derived from national and/or global datasets such as Open street maps and Digital Earth Africa.
5. Data on Socio-economy, policy, governance and management practices will be extracted from outputs of WP2 and WP3. We will also use published/grey literature, information from Ghanaian and Tanzanian forest and land mangrove management authorities.

A multicriteria analysis similar to [<a href="#ref3">3</a>] will be used with the criteria that are related to the two risk factors considered in this project. We will use the following ecosystem modelling approaches to develop the multicriteria framework, i.e., spatial, statistical and/or processes-based (see review by<sup><a href="#ref4">4</a></sup>).

1. A spatial model (GIS, DEM, based information) will be used to quantify, characterize and analyse mapped data (i.e., geospatial data in relation to habitat connectivity, fragmentation, and management practices) from WP1 to identify potential restoration and conservation areas in both areas.

3. Statistical (empirical) models (i.e., regression, and multivariate analyses) and including species distribution model (SDM) will be used to analyse direct observations/sampled data sets and environmental data sets generated from maps. We will run SDM<sup><a href="#ref5">5</a></sup> using "dismo" package in R<sup><a href="#ref6">6</a></sup> and MaxEnt version 3.4.0<sup><a href="#ref7">7</a></sup> to determine the distribution of mangroves and habitat suitability.

5. Process-based models including climate model (focuses on regional or local bioclim variables to predict and forecast climate impacts), and mass-balance model (focuses on connectivity between mangrove wetland and adjacent system in terms of carbon and energy fluxes). Efforts will be made to compare results from the above models to the local people’s knowledge and management practices to identify and adopt restoration success measurable indicators. We will then develop multicriteria framework as a novel approach by combining the outputs of the above models together with additional inputs from WP1-WP3.

### References
<div class="references">
1. <a id="ref1"></a>Ekumah, B., et al., Assessing land use and land cover change in coastal urban wetlands of international importance in Ghana using Intensity Analysis. Wetlands Ecology and Management, 2020. 28: p. 271-284.
2. <a id="ref2"></a>Ekumah, B., et al., Geospatial assessment of ecosystem health of coastal urban wetlands in Ghana. Ocean & coastal management, 2020. 193: p. 105226.
3. <a id="ref3"></a>Young, A., et al., Identifying opportunities for living shorelines using a multi-criteria suitability analysis. Regional Studies in Marine Science, 2023. 61.
4. <a id="ref4"></a>Rivera-Monroy, V.H., et al., Are Existing Modeling Tools Useful to Evaluate Outcomes in Mangrove Restoration and Rehabilitation Projects? A Minireview. Forests, 2022. 13(10).
5. <a id="ref5"></a>Naimi, B. and M.B. Araujo, sdm: a reproducible and extensible R platform for species distribution modelling. Ecography, 2016. 39(4): p. 368-375.
6. <a id="ref6"></a>R Core Team, R., R: A language and environment for statistical computing. 2013.
7. <a id="ref7"></a>Phillips, S.J., et al., Opening the black box: an open-source release of Maxent. Ecography, 2017. 40(7): p. 887-893.
</div>