---
title: "WP1 - Mapping drivers and risks of mangrove habitat loss"
date: 2024-07-18
---

:::note Lead: NMBU; Co-lead: SUA
Other partners: UCC, NIBIO  
:::

### Background

Mapping of mangrove forests have been operationalized by recent global mapping approaches such as the Global Mangrove Watch that uses freely available data such as ALOS PALSAR and Landsat data, at 30m spatial resolution<sup><a href="#ref1">1</a></sup>. Nevertheless, there are some limitations to such an approach. Firstly, mangrove forests are spatially fragmented making it difficult or uncertain to monitor with such low spatial resolution images.

Secondly, such map products lack local reliability since field data in remote areas such as African coasts were not available. Thirdly, and most importantly, these global maps are not accompanied by spatially explicit information on the drivers of change and the risks to biodiversity and habitat loss. Understanding drivers and risks of mangrove habitat loss in a spatially explicit manner requires a spatial link between the mangrove habitat changes and the different biophysical and socio-economic variables- which WP1 is aiming at.

### Objectives

1. To map the changes and drivers of mangrove habitat losses based on biophysical and socio-economic variables from remotely sensed and ancillary data
2. To analyze and map the potential risks of loss of the mangrove habitat.

### Outcome

New knowledge on drivers and risks of mangrove habitat loss made available and accessible.

- **Output 1.1:** Maps of drivers of mangrove habitat loss made available.  
- **Output 1.2:** Risks of mangrove habitat loss analyzed and documented.  
- **Output 1.3:** Methods and framework to monitor drivers of mangrove loss and risks analysis developed.

### Methodology

**Research site, data and data sources:**

WP1 maps the coastal regions of Tanzania and Ghana where historical and recent data show the occurrence of, and threats to, mangrove forests. Multi-temporal cloudfree satellite images of coastal Tanzania and Ghana will be gathered from Norway’s International Climate and Forest Initiative (NICFI) Planet data program and Sentinel-2 satellites.

Data on topography, demography, infrastructure, climatic variables, etc. will be collected from the national databases of the respective countries. Field inventory data will be collected from different sources including existing maps, field excursion, local authorities, crowd mapping. Training and validation data will be collected in the field from randomly selected sites in both countries.

### Analysis

The bi-temporal images will be super-resolved using deep learning algorithms. Mangrove habitat losses and gains within the timespan will be detected based on bi-temporal image classification using machine learning methods<sup><a href="#ref2">2</a>, <a href="#ref3">3</a></sup>. Locally gathered training data will be used, and separate machine-learning models will be trained for each region. The methods will be implemented both on the NICFI and the super-resolved Sentinel-2 data separately; and the mangrove forest change maps created will be compared to each other.

The change areas will be characterized based on biophysical and socioeconomic data. GIS-based spatial correlation, proximity analysis, hotspot analysis and machine learning will be conducted to understand what is unique about the loss areas and the gain areas. Once the variables that uniquely characterize the loss areas are identified, they will be used to analyze the potential risks to the standing mangrove habitat. An approach called GIS-based multi-criteria decision analysis <sup><a href="#ref4">4</a></sup> will be implemented to estimate spatially explicit risks.

### Co-production and validation of maps

A participatory data collection and mapping of the drivers of mangrove losses will be conducted in collaboration with local vulnerable groups, and other regional and national stakeholders. Verification and uncertainty estimation of the mangrove change maps produced in this WP will be conducted using ground data gathered through a participatory approach.

### Research uptake

The outputs of this WP will be communicated through at least two peer-reviewed scientific articles, two conference presentations and one policy brief. The maps and information generated from this WP will be key inputs to [WP3](http://www.coastmanafrica.org/wp/wp3/) (linkages between changes and governance and policy), [WP4](http://www.coastmanafrica.org/wp/wp4/) (multicriteria analysis) and [WP5](http://www.coastmanafrica.org/wp/wp5/) (decision support tools).

### References
<div class="references">
1. <a id="ref1"></a> Bunting, P., et al., The global mangrove watch-a new 2010 global baseline of mangrove extent. Remote Sensing, 2018. 10(10): p. 1669.
2. <a id="ref2"></a> Baamonde, S., et al., Fully automatic multi-temporal land cover classification using Sentinel-2 image data. Procedia Computer Science, 2019. 159: p. 650-657.
3. <a id="ref3"></a> Vasilakos, C., D. Kavroudakis, and A. Georganta, Machine Learning Classification Ensemble of Multitemporal Sentinel-2 Images: The Case of a Mixed Mediterranean Ecosystem. Remote Sensing, 2020. 12(12).
4. <a id="ref4"></a> [GIS-based multi-criteria decision analysis reference - to be added]
</div>
