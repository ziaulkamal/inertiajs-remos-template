// resources/js/Components/Plugins.jsx

import React, { useEffect } from 'react';

const Plugins = () => {
    useEffect(() => {
        const loadPlugins = async () => {
            const files = [
                '/_js/jquery.min.js',
                '/_js/bootstrap.min.js',
                '/_js/bootstrap-select.min.js',
                '/_js/zoom.js',
                '/_js/apexcharts/apexcharts.js',
                '/_js/apexcharts/line-chart-1.js',
                '/_js/apexcharts/line-chart-2.js',
                '/_js/apexcharts/line-chart-3.js',
                '/_js/apexcharts/line-chart-4.js',
                '/_js/apexcharts/line-chart-5.js',
                '/_js/apexcharts/line-chart-6.js',
                '/_js/theme-settings.js',
                '/_js/main.js'
            ];

            for (const file of files) {
                await loadScript(file);
            }
        };

        loadPlugins();
    }, []);

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };

    return null;
};

export default Plugins;
