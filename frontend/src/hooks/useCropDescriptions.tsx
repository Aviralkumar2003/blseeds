import { useTranslation } from 'react-i18next';
import { cropDescriptions, CropDescription } from '../data/constants';

export const useCropDescriptions = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedCrops = () => {
    // If not Hindi, we can safely return the original English objects to save processing
    if (i18n.language !== 'hi') return cropDescriptions;

    const localized: Record<string, CropDescription> = {};
    
    Object.entries(cropDescriptions).forEach(([key, crop]) => {
      // Create a stable translation key from the product key
      // e.g. "Pea Seeds" -> "pea_seeds"
      // "B.L-11 Pea Seeds" -> "b_l_11_pea_seeds"
      const tKey = `crops.${key.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '')}`;
      
      const details: any = {};
      Object.entries(crop.details).forEach(([dKey, dValue]) => {
        if (Array.isArray(dValue)) {
          details[dKey] = dValue.map((_, i) => t(`${tKey}.details.${dKey}_${i}`, { defaultValue: dValue[i] }));
        } else if (typeof dValue === 'object' && dValue !== null) {
          const obj = dValue as { kharif?: string; summer?: string };
          details[dKey] = {
            kharif: obj.kharif ? t(`${tKey}.details.${dKey}_kharif`, { defaultValue: obj.kharif }) : undefined,
            summer: obj.summer ? t(`${tKey}.details.${dKey}_summer`, { defaultValue: obj.summer }) : undefined
          };
        } else {
          details[dKey] = t(`${tKey}.details.${dKey}`, { defaultValue: dValue as string });
        }
      });

      localized[key] = {
        ...crop,
        name: t(`${tKey}.name`, { defaultValue: crop.name }),
        category: t(`${tKey}.category`, { defaultValue: crop.category }),
        shortDescription: t(`${tKey}.shortDescription`, { defaultValue: crop.shortDescription }),
        details
      };
    });

    return localized;
  };

  return getLocalizedCrops();
};
