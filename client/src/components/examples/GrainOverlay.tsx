import GrainOverlay from '../landing/GrainOverlay';

export default function GrainOverlayExample() {
  return (
    <div className="relative h-64 bg-gradient-to-br from-[#40929e] to-[#2a6068]">
      <GrainOverlay />
      <div className="flex h-full items-center justify-center">
        <p className="text-white text-lg font-semibold">Grain texture overlay active</p>
      </div>
    </div>
  );
}
