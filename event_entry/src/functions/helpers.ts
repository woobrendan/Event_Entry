const getSeriesShort = (series: string): string => {
    const seriesList: { [key: string]: string } = {
        "Fanatec GT World Challenge America": "gtwc",
        "Pirelli GT4 America": "gt4a",
        "GT America": "gtam",
        "TC America": "tcam",
        "Toyota GR Cup": "grCup",
    };

    return seriesList[series];
};

export { getSeriesShort };
