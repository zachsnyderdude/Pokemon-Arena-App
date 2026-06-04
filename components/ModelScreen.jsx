import {
  Camera,
  DefaultLight,
  FilamentScene,
  FilamentView,
  Model,
} from "react-native-filament";

export default function ModelScreen({ model }) {
  return (
    <FilamentScene>
      <FilamentView style={{ flex: 1 }}>
        <DefaultLight />
        <Model source={model} />
        <Camera />
      </FilamentView>
    </FilamentScene>
  );
}